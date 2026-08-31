import logging

from django.db import transaction
from django.shortcuts import get_object_or_404
from drf_spectacular.utils import OpenApiExample, OpenApiResponse, extend_schema
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from chatbot.models import Conversation, Message
from chatbot.services import ChatbotOrchestrator, LLMConfigurationError, LLMRequestError

from .serializers import (
    ChatRequestSerializer,
    ChatResponseSerializer,
    ConversationSerializer,
    RequirementSerializer,
    website_example_cards,
)


logger = logging.getLogger(__name__)


@extend_schema(tags=['Chatbot'])
class ChatAPIView(APIView):
    @extend_schema(
        summary='AI chatbot-a mesaj göndərir',
        description=(
            'User mesajını PostgreSQL-də saxlayır, conversation kontekstini LLM-ə göndərir, '
            'AI cavabını saxlayır və uyğun olduqda baxıla bilən sayt nümunələrini qaytarır.'
        ),
        request=ChatRequestSerializer,
        responses={
            200: ChatResponseSerializer,
            400: OpenApiResponse(description='Etibarsız sorğu'),
            502: OpenApiResponse(description='LLM xidməti əlçatan deyil'),
            503: OpenApiResponse(description='LLM konfiqurasiyası tamamlanmayıb'),
        },
        examples=[
            OpenApiExample(
                'Yeni söhbət',
                value={
                    'message': 'Mənim restoranım var, menyu və onlayn sifarişli sayt istəyirəm.',
                },
                request_only=True,
            ),
            OpenApiExample(
                'Davam edən söhbət',
                value={
                    'conversation_id': '0f6a1ece-3e90-43e2-9e1a-640f0f524374',
                    'message': 'Həm də sayt telefonda rahat işləsin.',
                },
                request_only=True,
            ),
        ],
    )
    def post(self, request):
        serializer = ChatRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        conversation_id = serializer.validated_data.get('conversation_id')
        if conversation_id:
            conversation = get_object_or_404(Conversation, pk=conversation_id)
        else:
            conversation = Conversation.objects.create()

        Message.objects.create(
            conversation=conversation,
            sender=Message.Sender.USER,
            message=serializer.validated_data['message'],
        )
        conversation.save(update_fields=('updated_at',))

        try:
            result = ChatbotOrchestrator().respond(conversation)
        except LLMConfigurationError as error:
            logger.error('Chatbot LLM configuration error: %s', error)
            return Response(
                {
                    'code': 'llm_configuration_error',
                    'detail': 'Chatbot LLM konfiqurasiyası tamamlanmayıb.',
                },
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )
        except LLMRequestError as error:
            logger.warning('Chatbot LLM request failed: %s', error)
            return Response(
                {
                    'code': 'llm_request_error',
                    'detail': 'AI xidməti hazırda cavab verə bilmir. Zəhmət olmasa yenidən cəhd edin.',
                },
                status=status.HTTP_502_BAD_GATEWAY,
            )

        with transaction.atomic():
            bot_message = Message.objects.create(
                conversation=conversation,
                sender=Message.Sender.BOT,
                message=result.reply,
                example_links=result.example_links,
            )
            bot_message.website_examples.add(*result.website_examples)
            conversation.save(update_fields=('updated_at',))

        return Response(
            {
                'conversation_id': conversation.id,
                'message': result.reply,
                'requirement': RequirementSerializer(result.requirement).data,
                'website_examples': website_example_cards(result.website_examples, result.example_links),
            }
        )


@extend_schema(tags=['Chatbot'])
class ConversationDetailAPIView(APIView):
    @extend_schema(
        summary='Söhbət tarixçəsini qaytarır',
        description='Frontend conversation ID ilə əvvəlki user və bot mesajlarını yenidən yükləyə bilər.',
        responses={200: ConversationSerializer, 404: OpenApiResponse(description='Söhbət tapılmadı')},
    )
    def get(self, request, conversation_id):
        conversation = get_object_or_404(
            Conversation.objects.prefetch_related('messages__website_examples', 'requirement'),
            pk=conversation_id,
        )
        return Response(ConversationSerializer(conversation).data)

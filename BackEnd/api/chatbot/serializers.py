from drf_spectacular.utils import extend_schema_field
from rest_framework import serializers

from chatbot.models import Conversation, Message, WebsiteExample, WebsiteRequirement


class ChatRequestSerializer(serializers.Serializer):
    conversation_id = serializers.UUIDField(required=False)
    message = serializers.CharField(max_length=4000, trim_whitespace=True)

    def validate_message(self, value):
        if not value.strip():
            raise serializers.ValidationError('Mesaj boş ola bilməz.')
        return value.strip()


class WebsiteExampleCardSerializer(serializers.Serializer):
    id = serializers.CharField()
    website_type = serializers.CharField()
    title = serializers.CharField()
    description = serializers.CharField(allow_blank=True)
    website_url = serializers.URLField()
    preview_image_url = serializers.URLField(allow_blank=True)
    source = serializers.ChoiceField(choices=('curated', 'google', 'google_search'))


def website_example_cards(
    examples: list[WebsiteExample] | tuple[WebsiteExample, ...] | object,
    example_links: list[dict[str, str]] | None = None,
) -> list[dict[str, str]]:
    cards = [
        {
            'id': f'curated-{example.id}',
            'website_type': example.website_type,
            'title': example.title,
            'description': example.description,
            'website_url': example.website_url,
            'preview_image_url': example.preview_image_url,
            'source': 'curated',
        }
        for example in examples
    ]
    cards.extend(link for link in (example_links or []) if isinstance(link, dict))
    return cards


class MessageSerializer(serializers.ModelSerializer):
    role = serializers.SerializerMethodField()
    website_examples = serializers.SerializerMethodField()

    class Meta:
        model = Message
        fields = ('id', 'role', 'message', 'website_examples', 'created_at')

    @extend_schema_field(serializers.CharField())
    def get_role(self, obj) -> str:
        return 'assistant' if obj.sender == Message.Sender.BOT else 'user'

    @extend_schema_field(WebsiteExampleCardSerializer(many=True))
    def get_website_examples(self, obj) -> list[dict[str, str]]:
        return website_example_cards(list(obj.website_examples.all()), obj.example_links)


class RequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebsiteRequirement
        fields = (
            'purpose',
            'website_type',
            'business_sector',
            'page_count',
            'features',
            'design',
            'domain_needed',
            'hosting_needed',
            'additional_requirements',
        )


class ConversationSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True, read_only=True)
    requirement = RequirementSerializer(read_only=True)

    class Meta:
        model = Conversation
        fields = ('id', 'status', 'messages', 'requirement', 'created_at', 'updated_at')


class ChatResponseSerializer(serializers.Serializer):
    conversation_id = serializers.UUIDField()
    message = serializers.CharField()
    requirement = RequirementSerializer(allow_null=True)
    website_examples = WebsiteExampleCardSerializer(many=True)

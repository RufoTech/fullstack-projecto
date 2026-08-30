from django.urls import path

from .views import ChatAPIView, ConversationDetailAPIView


urlpatterns = [
    path('chat/', ChatAPIView.as_view(), name='chatbot-chat'),
    path('conversations/<uuid:conversation_id>/', ConversationDetailAPIView.as_view(), name='chatbot-conversation'),
]

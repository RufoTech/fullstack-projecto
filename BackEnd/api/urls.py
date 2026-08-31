from django.urls import path, include

from .views import ApplicationCreateView, application_categories


urlpatterns = [
    path('application-categories/', application_categories, name='application-categories'),
    path('requests/', ApplicationCreateView.as_view(), name='request-create'),
    path('calculator/', include('api.calculator.urls')),
    path('chatbot/', include('api.chatbot.urls')),
]

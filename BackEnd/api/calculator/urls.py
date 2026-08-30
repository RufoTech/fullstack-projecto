from django.urls import path

from .views import (
    CalculatorRequestView,
    get_services,
    calculate_price,
)


urlpatterns = [
    # Calculator API endpoints
    path('services/', get_services, name='get-services'),
    path('calculate/', calculate_price, name='calculate-price'),
    path('request/', CalculatorRequestView.as_view(), name='calculator-request'),
]

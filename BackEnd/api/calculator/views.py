from drf_spectacular.utils import extend_schema, OpenApiParameter, OpenApiExample
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import CalculatorRequest, Service
from .serializers import (
    ServiceSerializer,
    CalculatorRequestSerializer,
)


@extend_schema(
    tags=['Calculator'],
    summary='Bütün aktiv xidmətləri qaytarır',
    description='Mövcud bütün aktiv xidmətlərin siyahısını qaytarır. Bu endpoint xidmətlərin seçilməsi üçün istifadə olunur.',
)
@api_view(['GET'])
def get_services(request):
    """Bütün aktiv xidmətləri qaytarır"""
    services = Service.objects.filter(is_active=True)
    serializer = ServiceSerializer(services, many=True)
    return Response(serializer.data)


@extend_schema(
    tags=['Calculator'],
    summary='Qiymət hesablayır',
    description='Seçilmiş xidmətlərə əsasən ümumi qiyməti hesablayır. Xidmət ID-lərini massiv kimi göndərin.',
    request={
        'application/json': {
            'type': 'object',
            'properties': {
                'services': {
                    'type': 'array',
                    'items': {'type': 'integer'},
                    'description': 'Xidmət ID-ləri'
                }
            },
            'required': ['services']
        }
    },
    examples=[
        OpenApiExample(
            'Qiymət hesablama nümunəsi',
            value={'services': [1, 2, 3]},
        )
    ]
)
@api_view(['POST'])
def calculate_price(request):
    """Seçilmiş xidmətlərə əsasən qiymət hesablayır"""
    service_ids = request.data.get('services', [])
    
    if not service_ids:
        return Response(
            {'error': 'Ən azı bir xidmət seçilməlidir.'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    try:
        services = Service.objects.filter(id__in=service_ids, is_active=True)
        if len(services) != len(service_ids):
            return Response(
                {'error': 'Bəzi xidmətlər tapılmadı və ya aktiv deyil.'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        total_price = sum(service.price for service in services)
        services_detail = ServiceSerializer(services, many=True).data
        
        return Response({
            'total_price': total_price,
            'services': services_detail,
            'service_count': len(services)
        })
    except Exception as e:
        return Response(
            {'error': f'Qiymət hesablanarkən xəta baş verdi: {str(e)}'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@extend_schema(
    tags=['Calculator'],
    summary='Calculator müraciəti yaradır',
    description='Yeni calculator müraciəti yaradır. Qiymət avtomatik hesablanır və müraciət database-ə saxlanılır.',
    request=CalculatorRequestSerializer,
    responses={201: CalculatorRequestSerializer},
    examples=[
        OpenApiExample(
            'Müraciət nümunəsi',
            value={
                'first_name': 'İlham',
                'last_name': 'Əliyev',
                'phone_number': '+994501234567',
                'email': 'ilham@example.com',
                'company_name': 'Şirkət MMC',
                'message': 'Landing Page istəyirəm',
                'services': [1, 2, 3]
            },
        )
    ]
)
class CalculatorRequestView(generics.CreateAPIView):
    """Calculator müraciəti yaradır"""
    queryset = CalculatorRequest.objects.all()
    serializer_class = CalculatorRequestSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {
                'message': 'Müraciətiniz qəbul edildi.',
                'request': serializer.data,
            },
            status=status.HTTP_201_CREATED,
        )

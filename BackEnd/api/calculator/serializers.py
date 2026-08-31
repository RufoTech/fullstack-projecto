from rest_framework import serializers

from .models import CalculatorRequest, Service


class ServiceSerializer(serializers.ModelSerializer):
    category_label = serializers.CharField(source='get_category_display', read_only=True)

    class Meta:
        model = Service
        fields = [
            'id',
            'name',
            'slug',
            'description',
            'price',
            'category',
            'category_label',
            'is_active',
            'order',
        ]
        read_only_fields = ['id', 'category_label']


class CalculatorRequestSerializer(serializers.ModelSerializer):
    services = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Service.objects.filter(is_active=True),
        write_only=True,
    )
    services_detail = ServiceSerializer(source='services', many=True, read_only=True)
    status_label = serializers.CharField(source='get_status_display', read_only=True)

    class Meta:
        model = CalculatorRequest
        fields = [
            'id',
            'first_name',
            'last_name',
            'phone_number',
            'email',
            'company_name',
            'message',
            'services',
            'services_detail',
            'total_price',
            'status',
            'status_label',
            'created_at',
        ]
        read_only_fields = ['id', 'total_price', 'status', 'status_label', 'created_at']

    def validate_phone_number(self, value):
        normalized = value.replace(' ', '').replace('-', '').replace('(', '').replace(')', '')
        if not normalized.startswith('+'):
            normalized = normalized.lstrip('0')
        digits = normalized[1:] if normalized.startswith('+') else normalized

        if not digits.isdigit() or len(digits) < 9:
            raise serializers.ValidationError('Telefon nömrəsini düzgün daxil edin.')

        return value

    def validate_services(self, value):
        if not value:
            raise serializers.ValidationError('Ən azı bir xidmət seçilməlidir.')
        return value

    def create(self, validated_data):
        services = validated_data.pop('services')

        # Calculate total price using Django ORM
        total_price = sum(service.price for service in services)
        validated_data['total_price'] = total_price

        # Create calculator request
        calculator_request = CalculatorRequest.objects.create(**validated_data)
        calculator_request.services.set(services)

        return calculator_request

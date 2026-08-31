from rest_framework import serializers

from .models import Application


class ApplicationSerializer(serializers.ModelSerializer):
    category_label = serializers.CharField(source='get_category_display', read_only=True)

    class Meta:
        model = Application
        fields = [
            'id',
            'category',
            'category_label',
            'first_name',
            'last_name',
            'phone_number',
            'email',
            'company_name',
            'message',
            'status',
            'created_at',
        ]
        read_only_fields = ['id', 'category_label', 'status', 'created_at']

    def validate_phone_number(self, value):
        normalized = value.replace(' ', '').replace('-', '').replace('(', '').replace(')', '')
        if not normalized.startswith('+'):
            normalized = normalized.lstrip('0')
        digits = normalized[1:] if normalized.startswith('+') else normalized

        if not digits.isdigit() or len(digits) < 9:
            raise serializers.ValidationError('Telefon nömrəsini düzgün daxil edin.')

        return value

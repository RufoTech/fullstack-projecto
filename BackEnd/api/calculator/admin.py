from django.contrib import admin

from .models import CalculatorRequest, Service


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'is_active', 'order', 'created_at')
    list_filter = ('category', 'is_active', 'created_at')
    search_fields = ('name', 'description', 'slug')
    list_editable = ('is_active', 'order', 'price')
    readonly_fields = ('created_at', 'updated_at')
    prepopulated_fields = {'slug': ('name',)}
    date_hierarchy = 'created_at'


@admin.register(CalculatorRequest)
class CalculatorRequestAdmin(admin.ModelAdmin):
    list_display = (
        'full_name',
        'phone_number',
        'email',
        'total_price',
        'status',
        'created_at',
    )
    list_filter = ('status', 'created_at', 'services')
    search_fields = ('first_name', 'last_name', 'phone_number', 'email', 'company_name')
    readonly_fields = ('created_at', 'updated_at', 'total_price')
    list_editable = ('status',)
    filter_horizontal = ('services',)
    date_hierarchy = 'created_at'

    @admin.display(description='Ad Soyad')
    def full_name(self, obj):
        return f'{obj.first_name} {obj.last_name}'

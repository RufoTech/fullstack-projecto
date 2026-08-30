from django.contrib import admin

from .models import Application


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = (
        'full_name',
        'category',
        'phone_number',
        'email',
        'status',
        'created_at',
    )
    list_filter = ('category', 'status', 'created_at')
    search_fields = ('first_name', 'last_name', 'phone_number', 'email', 'company_name')
    readonly_fields = ('created_at', 'updated_at')
    list_editable = ('status',)
    date_hierarchy = 'created_at'

    @admin.display(description='Ad Soyad')
    def full_name(self, obj):
        return f'{obj.first_name} {obj.last_name}'

from django.contrib import admin

from .models import Conversation, CustomerProfile, Message, WebsiteExample, WebsiteRequirement


class MessageInline(admin.TabularInline):
    model = Message
    extra = 0
    can_delete = False
    fields = ('sender', 'message', 'website_examples', 'example_links', 'created_at')
    readonly_fields = fields
    ordering = ('created_at', 'id')
    filter_horizontal = ('website_examples',)


@admin.register(Conversation)
class ConversationAdmin(admin.ModelAdmin):
    list_display = ('short_id', 'customer_name', 'status', 'message_count', 'updated_at')
    list_filter = ('status', 'created_at', 'updated_at')
    search_fields = ('id', 'customer_profile__name', 'customer_profile__phone', 'customer_profile__email')
    readonly_fields = ('id', 'created_at', 'updated_at', 'context_summary')
    inlines = (MessageInline,)
    date_hierarchy = 'updated_at'

    @admin.display(description='ID')
    def short_id(self, obj):
        return str(obj.id)[:8]

    @admin.display(description='Müştəri')
    def customer_name(self, obj):
        try:
            return obj.customer_profile.name or '—'
        except CustomerProfile.DoesNotExist:
            return '—'

    @admin.display(description='Mesaj sayı')
    def message_count(self, obj):
        return obj.messages.count()


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('conversation', 'sender', 'short_message', 'created_at')
    list_filter = ('sender', 'created_at')
    search_fields = ('message', 'conversation__id')
    readonly_fields = ('conversation', 'sender', 'message', 'website_examples', 'example_links', 'created_at')
    filter_horizontal = ('website_examples',)
    date_hierarchy = 'created_at'

    @admin.display(description='Mesaj')
    def short_message(self, obj):
        return obj.message[:90]


@admin.register(CustomerProfile)
class CustomerProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email', 'conversation', 'updated_at')
    search_fields = ('name', 'phone', 'email', 'conversation__id')
    readonly_fields = ('created_at', 'updated_at')


@admin.register(WebsiteRequirement)
class WebsiteRequirementAdmin(admin.ModelAdmin):
    list_display = ('conversation', 'website_type', 'business_sector', 'page_count', 'updated_at')
    list_filter = ('website_type', 'domain_needed', 'hosting_needed', 'updated_at')
    search_fields = ('purpose', 'business_sector', 'additional_requirements', 'conversation__id')
    readonly_fields = ('created_at', 'updated_at')


@admin.register(WebsiteExample)
class WebsiteExampleAdmin(admin.ModelAdmin):
    list_display = ('title', 'website_type', 'website_url', 'is_active', 'order', 'updated_at')
    list_filter = ('website_type', 'is_active')
    search_fields = ('title', 'description', 'website_url')
    list_editable = ('is_active', 'order')
    readonly_fields = ('created_at', 'updated_at')

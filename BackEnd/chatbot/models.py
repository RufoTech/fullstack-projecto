import uuid

from django.db import models


class WebsiteType(models.TextChoices):
    CORPORATE = 'corporate', 'Korporativ sayt'
    CLINIC = 'clinic', 'Klinik saytı'
    RESTAURANT = 'restaurant', 'Restoran saytı'
    HOTEL = 'hotel', 'Otel saytı'
    STORE = 'store', 'Mağaza saytı'
    EDUCATION = 'education', 'Təhsil saytı'
    PORTFOLIO = 'portfolio', 'Portfolio'
    OTHER = 'other', 'Digər'


class Conversation(models.Model):
    class Status(models.TextChoices):
        ACTIVE = 'active', 'Aktiv'
        CLOSED = 'closed', 'Bağlanıb'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    status = models.CharField(max_length=16, choices=Status.choices, default=Status.ACTIVE)
    context_summary = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-updated_at']
        verbose_name = 'Söhbət'
        verbose_name_plural = 'Söhbətlər'

    def __str__(self):
        return f'Söhbət {str(self.id)[:8]}'


class WebsiteExample(models.Model):
    website_type = models.CharField(max_length=24, choices=WebsiteType.choices)
    title = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    website_url = models.URLField()
    preview_image_url = models.URLField(blank=True)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['website_type', 'order', 'title']
        verbose_name = 'Sayt nümunəsi'
        verbose_name_plural = 'Sayt nümunələri'

    def __str__(self):
        return f'{self.get_website_type_display()} — {self.title}'


class Message(models.Model):
    class Sender(models.TextChoices):
        USER = 'user', 'Müştəri'
        BOT = 'bot', 'Bot'

    conversation = models.ForeignKey(
        Conversation,
        on_delete=models.CASCADE,
        related_name='messages',
    )
    sender = models.CharField(max_length=8, choices=Sender.choices)
    message = models.TextField()
    website_examples = models.ManyToManyField(WebsiteExample, blank=True, related_name='messages')
    example_links = models.JSONField(default=list, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at', 'id']
        verbose_name = 'Mesaj'
        verbose_name_plural = 'Mesajlar'

    def __str__(self):
        return f'{self.get_sender_display()}: {self.message[:60]}'


class CustomerProfile(models.Model):
    conversation = models.OneToOneField(
        Conversation,
        on_delete=models.CASCADE,
        related_name='customer_profile',
    )
    name = models.CharField(max_length=120, blank=True)
    phone = models.CharField(max_length=48, blank=True)
    email = models.EmailField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Müştəri məlumatı'
        verbose_name_plural = 'Müştəri məlumatları'

    def __str__(self):
        return self.name or f'Müştəri {str(self.conversation_id)[:8]}'


class WebsiteRequirement(models.Model):
    conversation = models.OneToOneField(
        Conversation,
        on_delete=models.CASCADE,
        related_name='requirement',
    )
    purpose = models.TextField(blank=True)
    website_type = models.CharField(max_length=24, choices=WebsiteType.choices, blank=True)
    business_sector = models.CharField(max_length=160, blank=True)
    page_count = models.PositiveIntegerField(null=True, blank=True)
    features = models.JSONField(default=list, blank=True)
    design = models.CharField(max_length=160, blank=True)
    domain_needed = models.BooleanField(null=True, blank=True)
    hosting_needed = models.BooleanField(null=True, blank=True)
    additional_requirements = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Sayt tələbi'
        verbose_name_plural = 'Sayt tələbləri'

    def __str__(self):
        return f'{self.get_website_type_display() or "Yeni"} — {str(self.conversation_id)[:8]}'

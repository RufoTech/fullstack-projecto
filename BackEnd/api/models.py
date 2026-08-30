from django.db import models


class Application(models.Model):
    class WebsiteCategory(models.TextChoices):
        COMPANY = 'company', 'Şirkət saytı'
        CLINIC = 'clinic', 'Klinik sayt'
        HOTEL = 'hotel', 'Otel saytı'
        RESTAURANT = 'restaurant', 'Restoran saytı'
        STORE = 'store', 'Mağaza saytı'
        EDUCATION = 'education', 'Təhsil saytı'

    class Status(models.TextChoices):
        NEW = 'new', 'Yeni'
        CONTACTED = 'contacted', 'Əlaqə saxlanılıb'
        IN_PROGRESS = 'in_progress', 'İcradadır'
        COMPLETED = 'completed', 'Tamamlanıb'
        CANCELLED = 'cancelled', 'Ləğv edilib'

    category = models.CharField('Kateqoriya', max_length=32, choices=WebsiteCategory.choices)
    first_name = models.CharField('Ad', max_length=80)
    last_name = models.CharField('Soyad', max_length=80)
    phone_number = models.CharField('Telefon nömrəsi', max_length=32)
    email = models.EmailField('Elektron mail')
    company_name = models.CharField('Şirkət adı', max_length=120, blank=True)
    message = models.TextField('Qeyd', blank=True)
    status = models.CharField('Status', max_length=32, choices=Status.choices, default=Status.NEW)
    created_at = models.DateTimeField('Yaradılma tarixi', auto_now_add=True)
    updated_at = models.DateTimeField('Yenilənmə tarixi', auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Müraciət'
        verbose_name_plural = 'Müraciətlər'

    def __str__(self):
        return f'{self.first_name} {self.last_name} - {self.get_category_display()}'

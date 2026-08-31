from django.db import models


class Service(models.Model):
    class ServiceCategory(models.TextChoices):
        MAIN = 'main', 'Əsas xidmətlər'
        ADDITIONAL = 'additional', 'Əlavə xidmətlər'

    name = models.CharField('Xidmət adı', max_length=120)
    slug = models.SlugField('Slug', unique=True, max_length=120)
    description = models.TextField('Təsvir', blank=True)
    price = models.DecimalField('Qiymət', max_digits=10, decimal_places=2)
    category = models.CharField(
        'Kateqoriya',
        max_length=32,
        choices=ServiceCategory.choices,
        default=ServiceCategory.MAIN
    )
    is_active = models.BooleanField('Aktiv', default=True)
    order = models.IntegerField('Sıra', default=0)
    created_at = models.DateTimeField('Yaradılma tarixi', auto_now_add=True)
    updated_at = models.DateTimeField('Yenilənmə tarixi', auto_now=True)

    class Meta:
        ordering = ['order', 'name']
        verbose_name = 'Xidmət'
        verbose_name_plural = 'Xidmətlər'

    def __str__(self):
        return f'{self.name} - {self.price} AZN'


class CalculatorRequest(models.Model):
    class Status(models.TextChoices):
        NEW = 'new', 'Yeni'
        CONTACTED = 'contacted', 'Əlaqə saxlanılıb'
        IN_PROGRESS = 'in_progress', 'İcradadır'
        COMPLETED = 'completed', 'Tamamlanıb'
        CANCELLED = 'cancelled', 'Ləğv edilib'

    first_name = models.CharField('Ad', max_length=80)
    last_name = models.CharField('Soyad', max_length=80)
    phone_number = models.CharField('Telefon nömrəsi', max_length=32)
    email = models.EmailField('Elektron mail')
    company_name = models.CharField('Şirkət adı', max_length=120, blank=True)
    message = models.TextField('Qeyd', blank=True)
    services = models.ManyToManyField(Service, verbose_name='Xidmətlər', related_name='calculator_requests')
    total_price = models.DecimalField('Ümumi qiymət', max_digits=10, decimal_places=2, default=0)
    status = models.CharField('Status', max_length=32, choices=Status.choices, default=Status.NEW)
    created_at = models.DateTimeField('Yaradılma tarixi', auto_now_add=True)
    updated_at = models.DateTimeField('Yenilənmə tarixi', auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Calculator müraciəti'
        verbose_name_plural = 'Calculator müraciətləri'

    def __str__(self):
        return f'{self.first_name} {self.last_name} - {self.total_price} AZN'

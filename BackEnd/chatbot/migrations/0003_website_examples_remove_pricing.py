from django.db import migrations, models


EXAMPLES = [
    (
        'corporate',
        'Airbnb — korporativ platforma nümunəsi',
        'İlham üçün xarici nümunə: brend təqdimatı, axtarış və aydın istifadəçi axını.',
        'https://www.airbnb.com/',
        10,
    ),
    (
        'clinic',
        'Mayo Clinic — klinik sayt nümunəsi',
        'İlham üçün xarici nümunə: həkim, xidmət və müraciət məlumatlarının aydın quruluşu.',
        'https://www.mayoclinic.org/',
        20,
    ),
    (
        'restaurant',
        'Nando’s — restoran sayt nümunəsi',
        'İlham üçün xarici nümunə: menyu, məkan seçimi və sifariş yönümlü təcrübə.',
        'https://www.nandos.co.uk/',
        30,
    ),
    (
        'hotel',
        'Marriott — otel sayt nümunəsi',
        'İlham üçün xarici nümunə: otaq axtarışı, rezervasiya və xidmət təqdimatı.',
        'https://www.marriott.com/',
        40,
    ),
    (
        'store',
        'Etsy — mağaza sayt nümunəsi',
        'İlham üçün xarici nümunə: məhsul kataloqu, filtr və alış təcrübəsi.',
        'https://www.etsy.com/',
        50,
    ),
    (
        'education',
        'Coursera — təhsil sayt nümunəsi',
        'İlham üçün xarici nümunə: kurs kataloqu və proqram təqdimatı.',
        'https://www.coursera.org/',
        60,
    ),
    (
        'portfolio',
        'Behance — portfolio nümunəsi',
        'İlham üçün xarici nümunə: işlərin vizual təqdimatı və case study quruluşu.',
        'https://www.behance.net/',
        70,
    ),
]


def reset_quoted_conversations(apps, schema_editor):
    Conversation = apps.get_model('chatbot', 'Conversation')
    Conversation.objects.filter(status='quoted').update(status='active')


def seed_website_examples(apps, schema_editor):
    WebsiteExample = apps.get_model('chatbot', 'WebsiteExample')
    for website_type, title, description, website_url, order in EXAMPLES:
        WebsiteExample.objects.get_or_create(
            website_type=website_type,
            title=title,
            defaults={
                'description': description,
                'website_url': website_url,
                'order': order,
            },
        )


def unseed_website_examples(apps, schema_editor):
    WebsiteExample = apps.get_model('chatbot', 'WebsiteExample')
    WebsiteExample.objects.filter(title__in=[example[1] for example in EXAMPLES]).delete()


class Migration(migrations.Migration):
    dependencies = [('chatbot', '0002_seed_pricing_services')]

    operations = [
        migrations.CreateModel(
            name='WebsiteExample',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                (
                    'website_type',
                    models.CharField(
                        choices=[
                            ('corporate', 'Korporativ sayt'),
                            ('clinic', 'Klinik saytı'),
                            ('restaurant', 'Restoran saytı'),
                            ('hotel', 'Otel saytı'),
                            ('store', 'Mağaza saytı'),
                            ('education', 'Təhsil saytı'),
                            ('portfolio', 'Portfolio'),
                            ('other', 'Digər'),
                        ],
                        max_length=24,
                    ),
                ),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField(blank=True)),
                ('website_url', models.URLField()),
                ('preview_image_url', models.URLField(blank=True)),
                ('is_active', models.BooleanField(default=True)),
                ('order', models.PositiveIntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Sayt nümunəsi',
                'verbose_name_plural': 'Sayt nümunələri',
                'ordering': ['website_type', 'order', 'title'],
            },
        ),
        migrations.RemoveField(model_name='pricequoteline', name='quote'),
        migrations.RemoveField(model_name='pricequoteline', name='service'),
        migrations.RemoveField(model_name='websiterequirement', name='calculated_price'),
        migrations.RemoveField(model_name='websiterequirement', name='price_calculated_at'),
        migrations.RemoveField(model_name='websiterequirement', name='selected_services'),
        migrations.RunPython(reset_quoted_conversations, migrations.RunPython.noop),
        migrations.AlterField(
            model_name='conversation',
            name='status',
            field=models.CharField(
                choices=[('active', 'Aktiv'), ('closed', 'Bağlanıb')],
                default='active',
                max_length=16,
            ),
        ),
        migrations.DeleteModel(name='PriceQuote'),
        migrations.DeleteModel(name='PriceQuoteLine'),
        migrations.DeleteModel(name='PricingService'),
        migrations.AddField(
            model_name='message',
            name='website_examples',
            field=models.ManyToManyField(blank=True, related_name='messages', to='chatbot.websiteexample'),
        ),
    ]

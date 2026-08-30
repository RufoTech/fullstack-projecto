from decimal import Decimal

from django.db import migrations


SERVICES = [
    ('website-corporate', 'Korporativ sayt', 'website', 'corporate', '1800.00', 'flat', 0, '', 10),
    ('website-clinic', 'Klinik saytı', 'website', 'clinic', '2200.00', 'flat', 0, '', 20),
    ('website-restaurant', 'Restoran saytı', 'website', 'restaurant', '2200.00', 'flat', 0, '', 30),
    ('website-hotel', 'Otel saytı', 'website', 'hotel', '2600.00', 'flat', 0, '', 40),
    ('website-store', 'Onlayn mağaza', 'website', 'store', '3000.00', 'flat', 0, '', 50),
    ('website-education', 'Təhsil saytı', 'website', 'education', '2400.00', 'flat', 0, '', 60),
    ('website-portfolio', 'Portfolio saytı', 'website', 'portfolio', '1200.00', 'flat', 0, '', 70),
    ('website-other', 'Fərdi veb həll', 'website', 'other', '1800.00', 'flat', 0, '', 80),
    ('online-order', 'Onlayn sifariş', 'feature', '', '700.00', 'flat', 0, '', 100),
    ('online-payment', 'Onlayn ödəniş', 'feature', '', '600.00', 'flat', 0, '', 110),
    ('online-booking', 'Onlayn rezervasiya', 'feature', '', '450.00', 'flat', 0, '', 120),
    ('ui-ux-design', 'UI/UX dizayn', 'design', '', '550.00', 'flat', 0, '', 130),
    ('seo-setup', 'SEO başlanğıc sazlaması', 'seo', '', '350.00', 'flat', 0, '', 140),
    ('domain', 'Domain', 'infrastructure', '', '50.00', 'flat', 0, '', 150),
    ('hosting', 'İllik hosting', 'infrastructure', '', '150.00', 'flat', 0, '', 160),
    ('additional-page', 'Əlavə səhifə', 'page', '', '100.00', 'per_unit', 5, 'səhifə', 170),
    ('custom-feature', 'Əlavə fərdi funksiya', 'other', '', '500.00', 'flat', 0, '', 180),
]


def seed_pricing_services(apps, schema_editor):
    PricingService = apps.get_model('chatbot', 'PricingService')
    for code, name, category, website_type, price, billing_mode, included_units, unit_label, order in SERVICES:
        PricingService.objects.get_or_create(
            code=code,
            defaults={
                'name': name,
                'category': category,
                'website_type': website_type,
                'price': Decimal(price),
                'billing_mode': billing_mode,
                'included_units': included_units,
                'unit_label': unit_label,
                'order': order,
            },
        )


def unseed_pricing_services(apps, schema_editor):
    PricingService = apps.get_model('chatbot', 'PricingService')
    PricingService.objects.filter(code__in=[service[0] for service in SERVICES]).delete()


class Migration(migrations.Migration):
    dependencies = [('chatbot', '0001_initial')]

    operations = [migrations.RunPython(seed_pricing_services, unseed_pricing_services)]

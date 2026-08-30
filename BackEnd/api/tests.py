from django.test import TestCase

from .models import Application


class RequestApiTests(TestCase):
    def test_categories_endpoint_returns_website_types(self):
        response = self.client.get('/api/application-categories/')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.json(),
            [
                {'value': 'company', 'label': 'Şirkət saytı'},
                {'value': 'clinic', 'label': 'Klinik sayt'},
                {'value': 'hotel', 'label': 'Otel saytı'},
                {'value': 'restaurant', 'label': 'Restoran saytı'},
                {'value': 'store', 'label': 'Mağaza saytı'},
                {'value': 'education', 'label': 'Təhsil saytı'},
            ],
        )

    def test_request_can_be_created(self):
        response = self.client.post(
            '/api/requests/',
            data={
                'category': 'clinic',
                'first_name': 'Ali',
                'last_name': 'Aliyev',
                'phone_number': '+994501234567',
                'email': 'ali@example.com',
                'company_name': 'Example MMC',
                'message': 'Klinik sayt lazımdır.',
            },
            content_type='application/json',
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(Application.objects.count(), 1)
        self.assertEqual(response.json()['application']['category_label'], 'Klinik sayt')

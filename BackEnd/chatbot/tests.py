from unittest.mock import patch

from django.test import TestCase
from rest_framework.test import APIClient

from .models import Conversation, Message, WebsiteExample
from .services import ConversationDataService, GoogleResultsParser


class ConversationDataServiceTests(TestCase):
    def test_new_facts_are_merged_without_erasing_known_facts(self):
        conversation = Conversation.objects.create()
        service = ConversationDataService()
        service.apply(
            conversation,
            {
                'extracted': {
                    'customer': {'name': 'Aysel', 'phone': '', 'email': ''},
                    'purpose': 'Restoranı tanıtmaq və sifariş qəbul etmək',
                    'website_type': 'restaurant',
                    'business_sector': 'Restoran',
                    'features': ['menyu'],
                },
                'conversation_summary': 'Restoran üçün onlayn sifarişli sayt istəyir.',
            },
        )
        requirement = service.apply(
            conversation,
            {
                'extracted': {
                    'customer': {'name': '', 'phone': '+994501234567', 'email': ''},
                    'features': ['mobil uyğunluq'],
                },
                'conversation_summary': 'Restoran saytı və onlayn sifariş məlumdur.',
            },
        )

        profile = conversation.customer_profile
        profile.refresh_from_db()
        self.assertEqual(profile.name, 'Aysel')
        self.assertEqual(profile.phone, '+994501234567')
        self.assertEqual(requirement.website_type, 'restaurant')
        self.assertEqual(requirement.features, ['menyu', 'mobil uyğunluq'])


class ChatbotApiTests(TestCase):
    def setUp(self):
        self.example = WebsiteExample.objects.create(
            website_type='restaurant',
            title='Restoran menyu və sifariş nümunəsi',
            description='Menyu, mobil sifariş və rezervasiya axını üçün ilham nümunəsi.',
            website_url='https://www.nandos.co.uk/',
        )

    @patch('chatbot.services.LLMChatService.generate')
    def test_chat_api_saves_messages_and_returns_matching_examples(self, generate):
        generate.return_value = {
            'reply': 'Restoranınız üçün menyu və onlayn sifariş hissəsi olan mobil uyğun sayt yaxşı seçimdir. Bu nümunəyə baxa bilərsiniz.',
            'extracted': {
                'customer': {},
                'purpose': 'Restoranı tanıtmaq və sifariş qəbul etmək',
                'website_type': 'restaurant',
                'business_sector': 'Restoran',
                'features': ['menyu', 'onlayn sifariş'],
                'page_count': 5,
            },
            'show_examples': True,
            'example_website_types': ['restaurant'],
            'conversation_summary': 'Restoran saytı, menyu və onlayn sifariş funksiyası istənir.',
        }

        response = APIClient().post(
            '/api/chatbot/chat/',
            {'message': 'Mənim restoranım var, menyu və onlayn sifarişli sayt istəyirəm.'},
            format='json',
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['website_examples'][0]['id'], f'curated-{self.example.id}')
        self.assertNotIn('price_quote', response.data)
        conversation = Conversation.objects.get(pk=response.data['conversation_id'])
        bot_message = conversation.messages.get(sender=Message.Sender.BOT)
        self.assertEqual(conversation.messages.count(), 2)
        self.assertIn(self.example.id, bot_message.website_examples.values_list('id', flat=True))

        history_response = APIClient().get(f'/api/chatbot/conversations/{conversation.id}/')
        self.assertEqual(history_response.status_code, 200)
        self.assertIn(
            f'curated-{self.example.id}',
            [example['id'] for example in history_response.data['messages'][-1]['website_examples']],
        )

    @patch('chatbot.services.LLMChatService.generate')
    def test_general_question_keeps_context_without_forcing_examples(self, generate):
        generate.return_value = {
            'reply': 'Bəli, sayt telefon, planşet və kompüterdə rahat işləyəcək şəkildə hazırlanır.',
            'extracted': {
                'customer': {},
                'website_type': 'restaurant',
                'business_sector': 'Restoran',
            },
            'show_examples': False,
            'example_website_types': [],
            'conversation_summary': 'Restoran üçün sayt istəyir; mobil uyğunluq barədə soruşur.',
        }

        response = APIClient().post(
            '/api/chatbot/chat/',
            {'message': 'Sayt telefonda işləyəcək?'},
            format='json',
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['website_examples'], [])
        self.assertEqual(response.data['requirement']['website_type'], 'restaurant')

    @patch('chatbot.services.GoogleWebsiteExampleSearch._fetch_results', return_value=[])
    @patch('chatbot.services.LLMChatService.generate')
    def test_google_search_card_is_saved_when_examples_are_requested(self, generate, fetch_results):
        generate.return_value = {
            'reply': 'Bu axtarışda restoran sayt nümunələrinə baxa bilərsiniz.',
            'extracted': {'customer': {}, 'website_type': 'restaurant'},
            'show_examples': False,
            'example_website_types': ['restaurant'],
            'search_google_examples': True,
            'conversation_summary': 'Restoran sayt nümunələri istəyir.',
        }

        response = APIClient().post(
            '/api/chatbot/chat/',
            {'message': 'Restoran sayt nümunələrini Google-da göstərin.'},
            format='json',
        )

        self.assertEqual(response.status_code, 200)
        google_card = response.data['website_examples'][0]
        self.assertEqual(google_card['source'], 'google_search')
        self.assertTrue(google_card['website_url'].startswith('https://www.google.com/search?'))
        conversation = Conversation.objects.get(pk=response.data['conversation_id'])
        self.assertEqual(conversation.messages.get(sender=Message.Sender.BOT).example_links, [google_card])
        fetch_results.assert_called_once()


class GoogleResultsParserTests(TestCase):
    def test_parser_keeps_real_non_google_result_links(self):
        parser = GoogleResultsParser()
        parser.feed('<a href="/url?q=https://example.com/work"><h3>Restaurant website example</h3></a>')

        self.assertEqual(
            parser.results,
            [{'title': 'Restaurant website example', 'website_url': 'https://example.com/work'}],
        )

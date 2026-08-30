import json
import os
from dataclasses import dataclass
from html.parser import HTMLParser
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import parse_qs, quote_plus, urlparse
from urllib.request import Request, urlopen

from .models import Conversation, CustomerProfile, WebsiteExample, WebsiteRequirement, WebsiteType


class ChatbotServiceError(Exception):
    """Base error for errors that are safe to return through the API."""


class LLMConfigurationError(ChatbotServiceError):
    pass


class LLMRequestError(ChatbotServiceError):
    pass


@dataclass
class ChatbotResult:
    reply: str
    requirement: WebsiteRequirement
    website_examples: list[WebsiteExample]
    example_links: list[dict[str, str]]


WEBSITE_TYPE_ALIASES = {
    'corporate': WebsiteType.CORPORATE,
    'company': WebsiteType.CORPORATE,
    'korporativ': WebsiteType.CORPORATE,
    'sirket': WebsiteType.CORPORATE,
    'şirkət': WebsiteType.CORPORATE,
    'clinic': WebsiteType.CLINIC,
    'klinika': WebsiteType.CLINIC,
    'restaurant': WebsiteType.RESTAURANT,
    'restoran': WebsiteType.RESTAURANT,
    'hotel': WebsiteType.HOTEL,
    'otel': WebsiteType.HOTEL,
    'store': WebsiteType.STORE,
    'shop': WebsiteType.STORE,
    'magaza': WebsiteType.STORE,
    'mağaza': WebsiteType.STORE,
    'ecommerce': WebsiteType.STORE,
    'e-commerce': WebsiteType.STORE,
    'education': WebsiteType.EDUCATION,
    'tehsil': WebsiteType.EDUCATION,
    'təhsil': WebsiteType.EDUCATION,
    'portfolio': WebsiteType.PORTFOLIO,
    'other': WebsiteType.OTHER,
    'diger': WebsiteType.OTHER,
    'digər': WebsiteType.OTHER,
}

GOOGLE_SEARCH_QUERIES = {
    WebsiteType.CORPORATE: 'corporate website design examples',
    WebsiteType.CLINIC: 'clinic website design examples',
    WebsiteType.RESTAURANT: 'restaurant website design examples',
    WebsiteType.HOTEL: 'hotel website design examples',
    WebsiteType.STORE: 'ecommerce website design examples',
    WebsiteType.EDUCATION: 'education website design examples',
    WebsiteType.PORTFOLIO: 'portfolio website design examples',
    WebsiteType.OTHER: 'business website design examples',
}


def _text(value: Any, maximum: int = 4000) -> str:
    return value.strip()[:maximum] if isinstance(value, str) else ''


def _boolean(value: Any) -> bool | None:
    if isinstance(value, bool):
        return value
    if isinstance(value, str):
        normalized = value.strip().lower()
        if normalized in {'true', 'yes', 'bəli', 'beli', 'var', 'lazımdır', 'lazimdir'}:
            return True
        if normalized in {'false', 'no', 'xeyr', 'yox', 'lazım deyil', 'lazim deyil'}:
            return False
    return None


def _page_count(value: Any) -> int | None:
    try:
        page_count = int(value)
    except (TypeError, ValueError):
        return None
    return page_count if 1 <= page_count <= 500 else None


def _website_type(value: Any) -> str:
    return WEBSITE_TYPE_ALIASES.get(_text(value, 48).lower(), '')


def _content_from_response(payload: dict[str, Any]) -> str:
    choices = payload.get('choices')
    if isinstance(choices, list) and choices:
        message = choices[0].get('message') if isinstance(choices[0], dict) else None
        content = message.get('content') if isinstance(message, dict) else None
        if isinstance(content, str):
            return content.strip()
        if isinstance(content, list):
            return ''.join(item.get('text', '') for item in content if isinstance(item, dict)).strip()

    output_text = payload.get('output_text')
    return output_text.strip() if isinstance(output_text, str) else ''


def _parse_llm_payload(content: str) -> dict[str, Any]:
    cleaned = content.strip()
    if cleaned.startswith('```'):
        cleaned = cleaned.split('\n', 1)[-1]
        cleaned = cleaned.rsplit('```', 1)[0].strip()

    try:
        payload = json.loads(cleaned)
    except json.JSONDecodeError:
        start, end = cleaned.find('{'), cleaned.rfind('}')
        if start == -1 or end <= start:
            return {
                'reply': cleaned,
                'extracted': {},
                'show_examples': False,
                'example_website_types': [],
                'search_google_examples': False,
                'conversation_summary': '',
            }
        try:
            payload = json.loads(cleaned[start : end + 1])
        except json.JSONDecodeError:
            return {
                'reply': cleaned,
                'extracted': {},
                'show_examples': False,
                'example_website_types': [],
                'search_google_examples': False,
                'conversation_summary': '',
            }

    if not isinstance(payload, dict):
        return {
            'reply': cleaned,
            'extracted': {},
            'show_examples': False,
            'example_website_types': [],
            'search_google_examples': False,
            'conversation_summary': '',
        }

    requested_types = [
        normalized
        for item in payload.get('example_website_types', [])
        if (normalized := _website_type(item))
    ]
    return {
        'reply': _text(payload.get('reply'), 2000) or 'Zəhmət olmasa, bir az daha ətraflı yaza bilərsiniz?',
        'extracted': payload.get('extracted') if isinstance(payload.get('extracted'), dict) else {},
        'show_examples': _boolean(payload.get('show_examples')) is True or bool(requested_types),
        'example_website_types': list(dict.fromkeys(requested_types)),
        'search_google_examples': _boolean(payload.get('search_google_examples')) is True,
        'conversation_summary': _text(payload.get('conversation_summary'), 2000),
    }


class LLMChatService:
    """Server-side OpenAI-compatible LLM client. It never exposes its API key."""

    history_limit = 24

    def generate(self, conversation: Conversation) -> dict[str, Any]:
        endpoint = os.environ.get('CHATBOT_LLM_ENDPOINT')
        api_key = os.environ.get('CHATBOT_LLM_API_KEY')
        model = os.environ.get('CHATBOT_LLM_MODEL')
        if not endpoint or not api_key or not model:
            raise LLMConfigurationError('LLM konfiqurasiyası tamamlanmayıb.')

        example_types = list(
            WebsiteExample.objects.filter(is_active=True)
            .order_by('website_type', 'order', 'id')
            .values('website_type', 'title')
        )
        state = self._conversation_state(conversation)
        messages = [
            {'role': 'system', 'content': self._system_prompt(example_types, state)},
            *self._history(conversation),
        ]
        request_body = json.dumps({'model': model, 'messages': messages}).encode('utf-8')
        request = Request(
            endpoint,
            data=request_body,
            headers={
                'Authorization': f'Bearer {api_key}',
                'Content-Type': 'application/json',
            },
            method='POST',
        )

        try:
            with urlopen(request, timeout=45) as response:
                payload = json.loads(response.read().decode('utf-8'))
        except HTTPError as error:
            raise LLMRequestError(f'LLM xidməti HTTP {error.code} cavabı verdi.') from error
        except (URLError, TimeoutError, json.JSONDecodeError) as error:
            raise LLMRequestError('LLM xidməti ilə əlaqə yaratmaq mümkün olmadı.') from error

        content = _content_from_response(payload)
        if not content:
            raise LLMRequestError('LLM xidməti boş cavab qaytardı.')
        return _parse_llm_payload(content)

    def _history(self, conversation: Conversation) -> list[dict[str, str]]:
        messages = list(conversation.messages.order_by('-created_at', '-id')[: self.history_limit])
        messages.reverse()
        return [
            {
                'role': 'assistant' if message.sender == 'bot' else 'user',
                'content': message.message,
            }
            for message in messages
        ]

    def _conversation_state(self, conversation: Conversation) -> dict[str, Any]:
        profile = getattr(conversation, 'customer_profile', None)
        requirement = getattr(conversation, 'requirement', None)
        shown_example_types = list(
            WebsiteExample.objects.filter(messages__conversation=conversation)
            .values_list('website_type', flat=True)
            .distinct()
        )
        shown_google_example_types = {
            link.get('website_type')
            for links in conversation.messages.values_list('example_links', flat=True)
            if isinstance(links, list)
            for link in links
            if isinstance(link, dict) and isinstance(link.get('website_type'), str)
        }
        return {
            'summary': conversation.context_summary,
            'customer': {
                'name': profile.name if profile else '',
                'phone': profile.phone if profile else '',
                'email': profile.email if profile else '',
            },
            'requirement': {
                'purpose': requirement.purpose if requirement else '',
                'website_type': requirement.website_type if requirement else '',
                'business_sector': requirement.business_sector if requirement else '',
                'page_count': requirement.page_count if requirement else None,
                'features': requirement.features if requirement else [],
                'design': requirement.design if requirement else '',
                'domain_needed': requirement.domain_needed if requirement else None,
                'hosting_needed': requirement.hosting_needed if requirement else None,
                'additional_requirements': requirement.additional_requirements if requirement else '',
            },
            'shown_example_types': shown_example_types,
            'shown_google_example_types': sorted(shown_google_example_types),
        }

    def _system_prompt(self, example_types: list[dict[str, Any]], state: dict[str, Any]) -> str:
        return f'''Sən Webora üçün ağıllı, qısa və mehriban Azərbaycan dilli köməkçisən.
İstifadəçinin gündəlik yazı formasını və yazı səhvlərini düzgün başa düş. Mövcud söhbət vəziyyəti sənə verilir; artıq məlum olan məlumatı təkrar soruşma. İstifadəçi layihədən kənar normal sual verirsə, onu təbii və qısa cavablandır. Sual sayt, dizayn, mobil uyğunluq, SEO, domain, hosting, onlayn sifariş, admin panel, yeniləmə və ya başqa rəqəmsal xidmətlə bağlıdırsa, konkret və faydalı cavab ver. Biznes sahəsi məlumdursa cavabı həmin biznesə uyğunlaşdır. Yalnız ehtiyac olduqda söhbəti yenidən sayt ehtiyacına qaytar.

Müştərinin ehtiyacı aydın deyilsə, yalnız növbəti ən faydalı məlumatı soruş. Saytın məqsədi məlum deyilsə, uyğun həlli anlamaq üçün onu qısa və təbii formada soruş. Hazır sual siyahısı və ya eyni şablondan istifadə etmə.

Qiymət, qiymət aralığı, hesablanma və ya avtomatik təklif haqqında heç bir rəqəm yazma. İstifadəçi qiymət soruşsa, ehtiyacların əvvəlcə dəqiqləşdirilməli olduğunu qısa izah et; qiymət hesablaması etmə.

Sayt nümunələri backend tərəfindən kart kimi göstərilir. İstifadəçi nümunə istəyirsə və ya sayt istədiyini bildirərkən sayt növü məlumdursa, uyğun admin nümunəsini göstərmək üçün show_examples=true və example_website_types sahəsində uyğun növü yaz. İstifadəçi xüsusi olaraq real nümunələri, Google nəticələrini və ya "sayt nümunələrinə baxa bilərəm?" kimi bir istək yazırsa, search_google_examples=true qaytar. Əvvəlki söhbətdə artıq göstərilən növləri, istifadəçi yenidən istəməyibsə, təkrar göstərmə. Link, URL və ya uydurma nümunə cavab mətninə yazma; backend kartları özü əlavə edəcək.

Yalnız JSON qaytar, Markdown və əlavə mətn yazma. Sxem:
{{
  "reply": "istifadəçiyə qısa, təbii cavab",
  "extracted": {{
    "customer": {{"name": "", "phone": "", "email": ""}},
    "purpose": "", "website_type": "corporate|clinic|restaurant|hotel|store|education|portfolio|other|",
    "business_sector": "", "page_count": null, "features": [], "design": "",
    "domain_needed": null, "hosting_needed": null, "additional_requirements": ""
  }},
  "show_examples": false,
  "example_website_types": [],
  "search_google_examples": false,
  "conversation_summary": "mövcud faktların qısa xülasəsi"
}}

Nümunə kataloqu (yalnız növ və başlıq):
{json.dumps(example_types, ensure_ascii=False)}

Mövcud söhbət vəziyyəti:
{json.dumps(state, ensure_ascii=False)}'''


class ConversationDataService:
    def apply(self, conversation: Conversation, llm_data: dict[str, Any]) -> WebsiteRequirement:
        extracted = llm_data['extracted']
        customer_data = extracted.get('customer') if isinstance(extracted.get('customer'), dict) else {}
        profile, _ = CustomerProfile.objects.get_or_create(conversation=conversation)
        self._update_profile(profile, customer_data)

        requirement, _ = WebsiteRequirement.objects.get_or_create(conversation=conversation)
        self._update_requirement(requirement, extracted)

        summary = llm_data['conversation_summary']
        if summary and summary != conversation.context_summary:
            conversation.context_summary = summary
            conversation.save(update_fields=('context_summary', 'updated_at'))
        return requirement

    def _update_profile(self, profile: CustomerProfile, data: dict[str, Any]) -> None:
        changed_fields = []
        for field, maximum in (('name', 120), ('phone', 48), ('email', 254)):
            value = _text(data.get(field), maximum)
            if value and value != getattr(profile, field):
                setattr(profile, field, value)
                changed_fields.append(field)
        if changed_fields:
            profile.save(update_fields=[*changed_fields, 'updated_at'])

    def _update_requirement(self, requirement: WebsiteRequirement, data: dict[str, Any]) -> None:
        changed_fields = []
        for field, maximum in {
            'purpose': 4000,
            'business_sector': 160,
            'design': 160,
        }.items():
            value = _text(data.get(field), maximum)
            if value and value != getattr(requirement, field):
                setattr(requirement, field, value)
                changed_fields.append(field)

        website_type = _website_type(data.get('website_type'))
        if website_type and website_type != requirement.website_type:
            requirement.website_type = website_type
            changed_fields.append('website_type')

        page_count = _page_count(data.get('page_count'))
        if page_count is not None and page_count != requirement.page_count:
            requirement.page_count = page_count
            changed_fields.append('page_count')

        for field in ('domain_needed', 'hosting_needed'):
            value = _boolean(data.get(field))
            if value is not None and value != getattr(requirement, field):
                setattr(requirement, field, value)
                changed_fields.append(field)

        features = data.get('features')
        if isinstance(features, list):
            cleaned_features = [_text(item, 120) for item in features]
            merged_features = list(dict.fromkeys([*requirement.features, *filter(None, cleaned_features)]))
            if merged_features != requirement.features:
                requirement.features = merged_features
                changed_fields.append('features')

        additional_requirements = _text(data.get('additional_requirements'), 4000)
        if additional_requirements and additional_requirements not in requirement.additional_requirements:
            requirement.additional_requirements = '\n'.join(
                filter(None, [requirement.additional_requirements, additional_requirements])
            )
            changed_fields.append('additional_requirements')

        if changed_fields:
            requirement.save(update_fields=[*changed_fields, 'updated_at'])


class WebsiteExampleService:
    max_examples = 3

    def select(self, requirement: WebsiteRequirement, llm_data: dict[str, Any]) -> list[WebsiteExample]:
        if not llm_data['show_examples']:
            return []

        website_types = list(llm_data['example_website_types'])
        if not website_types and requirement.website_type:
            website_types = [requirement.website_type]
        if not website_types:
            return []

        return list(
            WebsiteExample.objects.filter(is_active=True, website_type__in=website_types)
            .order_by('order', 'id')[: self.max_examples]
        )


def _google_result_url(href: str) -> str:
    parsed = urlparse(href)
    if parsed.path == '/url':
        candidate = parse_qs(parsed.query).get('q', [''])[0]
    elif parsed.scheme in {'http', 'https'}:
        candidate = href
    else:
        candidate = ''

    candidate_parsed = urlparse(candidate)
    if candidate_parsed.scheme not in {'http', 'https'} or not candidate_parsed.netloc:
        return ''
    if candidate_parsed.netloc.endswith('google.com'):
        return ''
    return candidate


class GoogleResultsParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.results: list[dict[str, str]] = []
        self.current_url = ''
        self.in_heading = False
        self.heading_parts: list[str] = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if tag == 'a':
            self.current_url = _google_result_url(attributes.get('href', ''))
        elif tag == 'h3' and self.current_url:
            self.in_heading = True
            self.heading_parts = []

    def handle_data(self, data):
        if self.in_heading:
            self.heading_parts.append(data)

    def handle_endtag(self, tag):
        if tag == 'h3' and self.in_heading:
            title = ' '.join(part.strip() for part in self.heading_parts if part.strip())
            if title and self.current_url and not any(item['website_url'] == self.current_url for item in self.results):
                self.results.append({'title': title[:120], 'website_url': self.current_url})
            self.in_heading = False
            self.heading_parts = []
        elif tag == 'a':
            self.current_url = ''


class GoogleWebsiteExampleSearch:
    max_results = 3

    def search(self, requirement: WebsiteRequirement, llm_data: dict[str, Any]) -> list[dict[str, str]]:
        if not llm_data.get('search_google_examples', False):
            return []

        website_type = next(iter(llm_data['example_website_types']), '') or requirement.website_type
        query = GOOGLE_SEARCH_QUERIES.get(website_type, GOOGLE_SEARCH_QUERIES[WebsiteType.OTHER])
        search_url = f'https://www.google.com/search?q={quote_plus(query)}&num={self.max_results}&hl=en'
        results = self._fetch_results(search_url)
        if results:
            return [
                {
                    'id': f'google-{website_type or "general"}-{index}',
                    'website_type': website_type or WebsiteType.OTHER,
                    'title': result['title'],
                    'description': 'Google axtarışından tapılan real sayt nümunəsi.',
                    'website_url': result['website_url'],
                    'preview_image_url': '',
                    'source': 'google',
                }
                for index, result in enumerate(results[: self.max_results], start=1)
            ]

        return [
            {
                'id': f'google-search-{website_type or "general"}',
                'website_type': website_type or WebsiteType.OTHER,
                'title': 'Google-da uyğun sayt nümunələrinə bax',
                'description': 'Axtarış nəticələrini yeni tabda aça bilərsiniz.',
                'website_url': search_url,
                'preview_image_url': '',
                'source': 'google_search',
            }
        ]

    def _fetch_results(self, search_url: str) -> list[dict[str, str]]:
        request = Request(search_url, headers={'User-Agent': 'Mozilla/5.0 (compatible; Webora/1.0)'})
        try:
            with urlopen(request, timeout=12) as response:
                document = response.read().decode('utf-8', errors='replace')
        except (HTTPError, URLError, TimeoutError):
            return []

        parser = GoogleResultsParser()
        parser.feed(document)
        return parser.results


class ChatbotOrchestrator:
    def respond(self, conversation: Conversation) -> ChatbotResult:
        llm_data = LLMChatService().generate(conversation)
        requirement = ConversationDataService().apply(conversation, llm_data)
        website_examples = WebsiteExampleService().select(requirement, llm_data)
        example_links = GoogleWebsiteExampleSearch().search(requirement, llm_data)
        return ChatbotResult(
            reply=llm_data['reply'],
            requirement=requirement,
            website_examples=website_examples,
            example_links=example_links,
        )

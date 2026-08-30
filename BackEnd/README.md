# Django Backend

Sayt hazırlanması xidməti üçün müraciət backend-i.

## Struktur

```text
BackEnd/
├── api/
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   ├── admin.py
│   └── apps.py
├── config/
│   ├── settings.py
│   └── urls.py
├── .env
├── manage.py
└── requirements.txt
```

## İşə salmaq

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

## Endpoint-lər

API kodları `api/` qovluğundadır.

Kateqoriyaları almaq:

`GET http://127.0.0.1:8000/api/application-categories/`

Müraciət göndərmək:

`POST http://127.0.0.1:8000/api/requests/`

Admin panel:

`http://127.0.0.1:8000/admin/`

## POST nümunəsi

```json
{
  "category": "company",
  "first_name": "Ali",
  "last_name": "Aliyev",
  "phone_number": "+994501234567",
  "email": "ali@example.com",
  "company_name": "Example MMC",
  "message": "Şirkət saytı lazımdır."
}
```

Kateqoriyalar:

- `company` - Şirkət saytı
- `clinic` - Klinik sayt
- `hotel` - Otel saytı
- `restaurant` - Restoran saytı
- `store` - Mağaza saytı
- `education` - Təhsil saytı

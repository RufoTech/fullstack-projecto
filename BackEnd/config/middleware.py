from ipaddress import ip_address
from urllib.parse import urlparse

from django.conf import settings
from django.http import HttpResponse


def is_allowed_origin(origin):
    if origin in getattr(settings, 'CORS_ALLOWED_ORIGINS', []):
        return True

    # When explicitly enabled, a local frontend can use an IPv6 loopback or
    # this computer's private LAN address. It remains limited to the known
    # frontend development ports.
    if not getattr(settings, 'CORS_ALLOW_PRIVATE_NETWORK_ORIGINS', False):
        return False

    parsed = urlparse(origin)
    if parsed.scheme != 'http' or parsed.port not in {3000, 3001}:
        return False

    host = parsed.hostname
    if host in {'localhost'}:
        return True

    try:
        address = ip_address(host)
    except ValueError:
        return False

    return address.is_loopback or address.is_private


class SimpleCorsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        origin = request.headers.get('Origin')

        if request.method == 'OPTIONS':
            response = HttpResponse()
        else:
            response = self.get_response(request)

        if origin and is_allowed_origin(origin):
            response['Access-Control-Allow-Origin'] = origin
            response['Vary'] = 'Origin'
            response['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
            response['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'

        return response

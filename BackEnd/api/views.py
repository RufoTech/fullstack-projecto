from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Application
from .serializers import ApplicationSerializer


@api_view(['GET'])
def application_categories(request):
    categories = [
        {'value': value, 'label': label}
        for value, label in Application.WebsiteCategory.choices
    ]
    return Response(categories)


class ApplicationCreateView(generics.CreateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {
                'message': 'Müraciətiniz qəbul edildi.',
                'application': serializer.data,
            },
            status=status.HTTP_201_CREATED,
        )

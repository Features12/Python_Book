from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from ..api.viewsets import CategoryViewSet


router = DefaultRouter()
router.register(r'category', CategoryViewSet)


# Подключение маршрутов Urls
urlpatterns = [
    url(r'^', include(router.urls)),
]
from rest_framework import viewsets
from ..api.serialaizers import CategorySerializer, PropertySerializer
from ..models import Category, Property


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
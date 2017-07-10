from rest_framework.serializers import ModelSerializer, CharField
from ..models import Category, Property

class PropertySerializer(ModelSerializer):
    class Meta:
        model = Property
        fields = [
            'id',
            'property_name',
            'short_description',
            'full_description',
        ]


class CategorySerializer(ModelSerializer):
    category_properties = PropertySerializer(read_only=True, source='properties', many=True)

    class Meta:
        model = Category
        fields = [
            'id',
            'category_name',
            'short_description',
            'category_properties',
        ]



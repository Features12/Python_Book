from .models import Category, Property
from django.contrib import admin

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = [
            'category_name',
            'short_description',
        ]


@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = [
            'property_name',
            'short_description',
            'full_description',
            'category',
        ]
    ordering = ['property_name',
                '-category', ]
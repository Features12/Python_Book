from django.db import models


class Category(models.Model):
    category_name = models.CharField(max_length=30)
    short_description = models.CharField(max_length=100)


    def __str__(self):
        return self.category_name


class Property(models.Model):
    property_name = models.CharField(max_length=30)
    short_description = models.CharField(max_length=100)
    full_description = models.TextField()
    category = models.ForeignKey(Category, related_name='properties')

    def __str__(self):
        return self.property_name


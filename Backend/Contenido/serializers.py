from rest_framework import serializers, routers, viewsets
from .models import PostBlog
from django.conf.urls import url, include


class PostBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostBlog
        fields = '__all__'
        lookup_field = 'slug'

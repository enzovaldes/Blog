from django.shortcuts import render
from .models import PostBlog
from .serializers import PostBlogSerializer
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView, ListAPIView 



# Create your views here.

#Esta vista despliega la lista de publicaciones desde la más reciente a la mas antigua.
class PostBlogListView(ListAPIView):
    queryset = PostBlog.objects.order_by('-FechaCreacion')
    serializer_class = PostBlogSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)

#Esta vista despliega la lista de publicaciones destacadas del blog.
class PostBlogFeaturedView(ListAPIView):
    queryset = PostBlog.objects.filter(Destacados = True)
    serializer_class = PostBlogSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)

#esta vista despliega los detalles de cada publicacion de la mas reciente a las mas antigua.
class PostBlogDetailView(RetrieveAPIView):
    queryset = PostBlog.objects.order_by('-FechaCreacion')
    serializer_class = PostBlogSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)

#esta vista despliega la lista por categorias del blog.
class PostBlogCategoryView(APIView):
    serializers_class = PostBlogSerializer
    permission_classes = (permissions.AllowAny,)

#con esta funcion los datos se solicitaran por si mismos.
    def Post(self, request, format=None):
        data = self.request.data
        Categoria = data('Categoria')
        queryset = PostBlog.objects.order_by('-FechaCreacion').filter(category_iexact= Categoria)
        serializer = PostBlogSerializer(queryset, many=True)

        return Response(serializer.data)





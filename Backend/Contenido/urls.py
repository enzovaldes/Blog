from django.urls import path
from . import views
from .views import PostBlogListView, PostBlogDetailView, PostBlogFeaturedView, PostBlogCategoryView

urlpatterns = [
    path('api/Contenido/', views.PostBlogListView.as_view()),
    path('api/<Slug>/', PostBlogDetailView.as_view()),
    path('api/Destacados/', PostBlogFeaturedView.as_view()),
    path('api/Categoria/', PostBlogCategoryView.as_view()),
]
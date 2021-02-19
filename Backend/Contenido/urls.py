from django.urls import path
#from . import views
from .views import PostBlogListView, PostBlogDetailView, PostBlogFeaturedView, PostBlogCategoryView

urlpatterns = [
    path('', PostBlogListView.as_view()),
    path('<slug>', PostBlogDetailView.as_view()),
    path('Destacados', PostBlogFeaturedView.as_view()),
    path('Categoria', PostBlogCategoryView.as_view()),
]
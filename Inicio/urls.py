from django.urls import path
from . import views

urlpatterns = [
    path('api/Inicio/', views.InicioListCreate.as_view()),
]
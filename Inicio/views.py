from django.shortcuts import render
from .models import Inicio
from .serializers import InicioSerializer
from rest_framework import generics

# Create your views here.

class InicioListCreate(generics.ListCreateAPIView):
    queryset = Inicio.objects.all()
    serializer_class = InicioSerializer

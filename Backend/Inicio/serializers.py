from rest_framework import serializers
from .models import Inicio

class InicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inicio
        fields = ('Usuario', 'Pass')

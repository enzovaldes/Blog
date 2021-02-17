from django.contrib import admin
from . import models

# Register your models here.

@admin.register(models.Inicio)
class UserAdmin(admin.ModelAdmin):
    list_display = ('Usuario', 'Pass',)
    search_fields = ('usuario',)
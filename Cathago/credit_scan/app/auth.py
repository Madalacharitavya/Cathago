from django.contrib import admin
from .models import User, Service

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'is_staff', 'is_active')
    fields = ('email', 'is_staff', 'is_active', 'is_superuser', 'date_joined')
    search_fields = ('email'),
    list_filter = ('is_staff', 'is_active')



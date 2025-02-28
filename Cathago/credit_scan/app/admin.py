from django.contrib import admin
from .models import User

# Customize the User model admin
class UserAdmin(admin.ModelAdmin):
    list_display = ('email',  'is_staff', 'is_active')
    search_fields = ('email', )
    list_filter = ('is_staff', 'is_active')
    ordering = ('email',)
import os
from dotenv import load_dotenv
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

load_dotenv()

APP_API_USER_PASS = str(os.getenv('APP_API_USER_PASS'))

User = get_user_model()

class Command(BaseCommand):    
    """Django command to create a superuser after initial migration.
       The password must be defined in the .env file using the variable APP_API_USER_PASS."""

    def handle(self, *args, **kwargs):
        email = "app-api-user@django.com"        
        
        if User.objects.filter(email=email).exists():
            self.stdout.write(self.style.WARNING('Superuser "{}" already exists.'.format(email)))
            return

        User.objects.create_superuser(email=email, password=APP_API_USER_PASS)
        self.stdout.write(self.style.SUCCESS('Superuser "{}" created successfully.'.format(email)))

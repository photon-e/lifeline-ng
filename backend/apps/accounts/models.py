from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    class Roles(models.TextChoices):
        CITIZEN = 'citizen', 'Citizen'
        RESPONDER = 'responder', 'Responder'
        ADMIN = 'admin', 'Admin'

    role = models.CharField(max_length=20, choices=Roles.choices, default=Roles.CITIZEN)
    phone_number = models.CharField(max_length=20, blank=True)
    is_verified_responder = models.BooleanField(default=False)

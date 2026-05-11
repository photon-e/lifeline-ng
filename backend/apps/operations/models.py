from django.conf import settings
from django.db import models

class Vehicle(models.Model):
    responder = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='vehicles')
    plate_number = models.CharField(max_length=20)
    vehicle_type = models.CharField(max_length=50, default='Ambulance')

class Hospital(models.Model):
    name = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()
    phone = models.CharField(max_length=20, blank=True)

class ResponderProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='responder_profile')
    current_latitude = models.FloatField(null=True, blank=True)
    current_longitude = models.FloatField(null=True, blank=True)
    is_online = models.BooleanField(default=False)
    certification_id = models.CharField(max_length=100, blank=True)

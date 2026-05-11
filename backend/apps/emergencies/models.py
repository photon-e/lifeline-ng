from django.conf import settings
from django.db import models

class EmergencyIncident(models.Model):
    class Types(models.TextChoices):
        ACCIDENT = 'accident', 'Accident'
        FIRE = 'fire', 'Fire'
        MEDICAL = 'medical', 'Medical Emergency'
        PREGNANCY = 'pregnancy', 'Pregnancy Emergency'
        VIOLENCE = 'violence', 'Violence/Injury'

    class Status(models.TextChoices):
        NEW = 'new', 'New'
        ACCEPTED = 'accepted', 'Accepted'
        EN_ROUTE = 'en_route', 'En Route'
        ARRIVED = 'arrived', 'Arrived'
        COMPLETED = 'completed', 'Completed'

    reporter = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='reported_incidents')
    emergency_type = models.CharField(max_length=20, choices=Types.choices)
    description = models.TextField(blank=True)
    latitude = models.FloatField()
    longitude = models.FloatField()
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.NEW)
    created_at = models.DateTimeField(auto_now_add=True)

class EmergencyResponse(models.Model):
    incident = models.ForeignKey(EmergencyIncident, on_delete=models.CASCADE, related_name='responses')
    responder = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='responses')
    status = models.CharField(max_length=20, choices=EmergencyIncident.Status.choices, default=EmergencyIncident.Status.ACCEPTED)
    eta_minutes = models.PositiveIntegerField(default=15)
    created_at = models.DateTimeField(auto_now_add=True)

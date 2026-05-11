import math
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from rest_framework import generics, permissions
from .models import EmergencyIncident, EmergencyResponse
from .serializers import EmergencyIncidentSerializer, EmergencyResponseSerializer
from apps.operations.models import ResponderProfile


def haversine(lat1, lon1, lat2, lon2):
    r = 6371
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat/2)**2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon/2)**2
    return r * 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))

class IncidentListCreateView(generics.ListCreateAPIView):
    queryset = EmergencyIncident.objects.all().order_by('-created_at')
    serializer_class = EmergencyIncidentSerializer

    def perform_create(self, serializer):
        incident = serializer.save(reporter=self.request.user)
        nearby = []
        for profile in ResponderProfile.objects.filter(is_online=True):
            if profile.current_latitude and profile.current_longitude:
                km = haversine(incident.latitude, incident.longitude, profile.current_latitude, profile.current_longitude)
                if km <= 10:
                    nearby.append({'responder_id': profile.user_id, 'distance_km': round(km, 2)})

        async_to_sync(get_channel_layer().group_send)('incidents', {
            'type': 'incident_message',
            'payload': {'incident_id': incident.id, 'type': incident.emergency_type, 'nearby_responders': nearby}
        })

class IncidentDetailView(generics.RetrieveUpdateAPIView):
    queryset = EmergencyIncident.objects.all()
    serializer_class = EmergencyIncidentSerializer

class ResponseCreateView(generics.CreateAPIView):
    serializer_class = EmergencyResponseSerializer

class ResponseUpdateView(generics.RetrieveUpdateAPIView):
    queryset = EmergencyResponse.objects.all()
    serializer_class = EmergencyResponseSerializer

from rest_framework import serializers
from .models import EmergencyIncident, EmergencyResponse

class EmergencyIncidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmergencyIncident
        fields = '__all__'
        read_only_fields = ('reporter', 'status', 'created_at')

class EmergencyResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmergencyResponse
        fields = '__all__'
        read_only_fields = ('created_at',)

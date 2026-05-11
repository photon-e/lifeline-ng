from rest_framework import serializers
from .models import ResponderProfile, Vehicle, Hospital

class ResponderProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResponderProfile
        fields = '__all__'

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = '__all__'

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = '__all__'

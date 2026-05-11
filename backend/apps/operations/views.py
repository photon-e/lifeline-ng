from rest_framework import generics
from .models import ResponderProfile, Vehicle, Hospital
from .serializers import ResponderProfileSerializer, VehicleSerializer, HospitalSerializer

class ResponderProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = ResponderProfileSerializer

    def get_object(self):
        return ResponderProfile.objects.get_or_create(user=self.request.user)[0]

class VehicleListCreateView(generics.ListCreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

class HospitalListView(generics.ListAPIView):
    queryset = Hospital.objects.all()
    serializer_class = HospitalSerializer

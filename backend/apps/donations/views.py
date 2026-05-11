from django.db.models import Sum
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Donation
from .serializers import DonationSerializer

class DonationListCreateView(generics.ListCreateAPIView):
    queryset = Donation.objects.all().order_by('-created_at')
    serializer_class = DonationSerializer
    permission_classes = [permissions.AllowAny]

class DonationStatsView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        total = Donation.objects.aggregate(total=Sum('amount'))['total'] or 0
        return Response({'total_donations': total, 'count': Donation.objects.count()})

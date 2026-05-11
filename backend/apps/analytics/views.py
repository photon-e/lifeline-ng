from django.db.models import Count
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from apps.emergencies.models import EmergencyIncident

class AdminAnalyticsView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        return Response({
            'total_incidents': EmergencyIncident.objects.count(),
            'status_breakdown': list(EmergencyIncident.objects.values('status').annotate(count=Count('id'))),
            'type_breakdown': list(EmergencyIncident.objects.values('emergency_type').annotate(count=Count('id'))),
        })

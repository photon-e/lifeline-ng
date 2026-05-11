from django.urls import path
from .views import DonationListCreateView, DonationStatsView
urlpatterns = [
    path('', DonationListCreateView.as_view()),
    path('stats/', DonationStatsView.as_view()),
]

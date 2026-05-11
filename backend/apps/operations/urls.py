from django.urls import path
from .views import ResponderProfileView, VehicleListCreateView, HospitalListView
urlpatterns = [
    path('responder-profile/', ResponderProfileView.as_view()),
    path('vehicles/', VehicleListCreateView.as_view()),
    path('hospitals/', HospitalListView.as_view()),
]

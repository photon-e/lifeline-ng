from django.urls import path
from .views import IncidentListCreateView, IncidentDetailView, ResponseCreateView, ResponseUpdateView

urlpatterns = [
    path('incidents/', IncidentListCreateView.as_view()),
    path('incidents/<int:pk>/', IncidentDetailView.as_view()),
    path('responses/', ResponseCreateView.as_view()),
    path('responses/<int:pk>/', ResponseUpdateView.as_view()),
]

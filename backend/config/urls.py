from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('apps.accounts.urls')),
    path('api/emergencies/', include('apps.emergencies.urls')),
    path('api/donations/', include('apps.donations.urls')),
    path('api/operations/', include('apps.operations.urls')),
    path('api/analytics/', include('apps.analytics.urls')),
]

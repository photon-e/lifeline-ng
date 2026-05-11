"""Quick seed script (run in Django shell)."""
from django.contrib.auth import get_user_model
from apps.operations.models import Hospital

User = get_user_model()
User.objects.get_or_create(username='admin', defaults={'role':'admin', 'is_staff':True, 'is_superuser':True})
User.objects.get_or_create(username='responder1', defaults={'role':'responder'})
Hospital.objects.get_or_create(name='Lagos University Teaching Hospital', latitude=6.5244, longitude=3.3792)
print('Seed complete')

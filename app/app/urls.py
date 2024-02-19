"""app URL Configuration"""

from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

from core import views as core_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('health-check/', core_views.health_check, name='health-check'),
    path('schema/', SpectacularAPIView.as_view(), name='api-schema'),
    path(
        '',
        SpectacularSwaggerView.as_view(url_name='api-schema'),
        name='api-docs',
    ),
    path('user/', include('user.urls')),
]
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^token/', views.obtain_expiring_auth_token),
]
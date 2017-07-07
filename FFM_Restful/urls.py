"""MyDjango19Py2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from rest_framework import routers
from housefinance import views
from restui import views as restview

router = routers.DefaultRouter()
router.register(r'accounts', views.AccountViewSet)
router.register(r'accountDocumentHeaders', views.AccountingDocumentHeaderViewSet)
router.register(r'accountDocumentItems', views.AccountingDocumentItemViewSet)

urlpatterns = [
    url(r'^ffm/', include('housefinance.urls', namespace='ffm')),
    url(r'^account/', include('account.urls', namespace='account')),
    url(r'^wechat/', include('wechat.urls', namespace='wechat')),
    url(r'^admin/', admin.site.urls),
    url(r'^auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^$', include('home.urls', namespace='home')),
    url(r'^objects/', include(router.urls)),
    url(r'^auth/', include('authentication.urls', namespace='auth')),
    url(r'^restdemo/', restview.demo_api),
    url(r'^restdemo2/', restview.demo2),
]

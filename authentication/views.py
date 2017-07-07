import datetime, json, pytz
from django.http import HttpResponse
from django.conf import settings
from rest_framework import status
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token


class ObtainExpiringAuthToken(ObtainAuthToken):
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            attrs = serializer.validate(request.data)
            token, created = Token.objects.get_or_create(user=attrs['user'])

            utc_now = datetime.datetime.utcnow()
            expirationTime = token.created + datetime.timedelta(seconds=settings.TOKEN_EXPIRATION_TIME)
            if not created and token.created.replace(tzinfo=pytz.utc).replace(
                    tzinfo=None) < utc_now - datetime.timedelta(seconds=settings.TOKEN_EXPIRATION_TIME):
                token.delete()
                token = Token.objects.create(user=attrs['user'])
                token.created = datetime.datetime.utcnow()
                token.save()
                expirationTime = token.created + datetime.timedelta(seconds=settings.TOKEN_EXPIRATION_TIME)
            response_data = {
                'token': token.key,
                'expirationTime': expirationTime.__str__()
            }
            return HttpResponse(json.dumps(response_data), content_type="application/json")

        return HttpResponse(serializer.errors.__str__(), status=status.HTTP_400_BAD_REQUEST)


obtain_expiring_auth_token = ObtainExpiringAuthToken.as_view()

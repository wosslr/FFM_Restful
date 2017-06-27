import datetime, pytz
from django.conf import settings
from rest_framework.authentication import TokenAuthentication
from rest_framework import exceptions


class ExpiringTokenAuthentication(TokenAuthentication):
    def authenticate_credentials(self, key):
        try:
            token = self.get_model().objects.get(key=key)
        except self.get_model().DoesNotExist:
            raise exceptions.AuthenticationFailed('Invalid token')

        if not token.user.is_active:
            raise exceptions.AuthenticationFailed('User inactive or deleted')

        utc_now = datetime.datetime.utcnow()

        if token.created.replace(tzinfo=pytz.utc).replace(tzinfo=None) < utc_now - datetime.timedelta(seconds=settings.TOKEN_EXPIRATION_TIME):
            raise exceptions.AuthenticationFailed('Token has expired')

        return (token.user, token)

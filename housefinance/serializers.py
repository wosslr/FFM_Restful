from housefinance.models import Account, AccountingDocumentHeader, AccountingDocumentItem
from rest_framework import serializers
from django.contrib.auth.models import User

class AccountSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Account
        fields = ('account_name', 'account_type', 'account_balance')


class AccountingDocumentHeaderSerializer(serializers.HyperlinkedModelSerializer):
    creator = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = AccountingDocumentHeader
        fields = ('creation_date', 'creator', 'comment')


class AccountingDocumentItemSerializer(serializers.HyperlinkedModelSerializer):
    document_header = serializers.PrimaryKeyRelatedField(queryset=AccountingDocumentHeader.objects.all())
    account = serializers.PrimaryKeyRelatedField(queryset=Account.objects.all())

    class Meta:
        model = AccountingDocumentItem
        fields = ('dc_indicator', 'amount', 'document_header', 'account', 'comment')

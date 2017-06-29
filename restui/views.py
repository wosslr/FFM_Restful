from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse


@api_view(['GET', 'POST'])
def demo_api(request):
    # if request.method == 'POST':
    #     print(request.data['data'])
    #     return Response({"data": request.data,
    #                      "test": LearningModel.test(LearningModel)})
    # return Response("hello world")
    return Response({'data': 'hello world'})

def demo2(request):
    return HttpResponse('demo 2')
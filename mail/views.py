from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


from .serializers.common import MessageSerializer
from .serializers.populated import PopulatedMessageSerializer
from .models import Message

class MessageListView(APIView):
    permission_classes = (IsAuthenticated, )


    def post(self, request):
        request.data['owner'] = request.user.id
        message_to_create = MessageSerializer(data=request.data)
        if message_to_create.is_valid():
            message_to_create.save()
            return Response( message_to_create.data, status=status.HTTP_201_CREATED)
        return Response(message_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
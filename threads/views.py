from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated

from .serializers.common import ThreadSerializer
from .serializers.populated import PopulatedThreadSerializer
from .models import Thread

class ThreadListView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, _request):
        thread_list = Thread.objects.all()
        serialized_thread_list = PopulatedThreadSerializer(thread_list, many=True)
        return Response(serialized_thread_list.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['messenger'] = request.user.id
        thread_to_create = ThreadSerializer(data=request.data)
        if thread_to_create.is_valid():
            thread_to_create.save()
            return Response(thread_to_create.data, status=status.HTTP_201_CREATED)
        return Response(thread_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class ThreadDetailView(APIView):
    permission_classes = (IsAuthenticated, )

    def get_thread(self, pk):
        try:
            return Thread.objects.get(pk=pk)
        except Thread.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        thread = self.get_thread(pk=pk)
        serialized_thread = PopulatedThreadSerializer(thread)
        return Response(serialized_thread.data, status=status.HTTP_200_OK)
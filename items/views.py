from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Item
from .serializers.common import ItemSerializer
from .serializers.populated import PopulatedItemSerializer

class ItemListView(APIView):
    ''' Handles all requests to /items (Get-Index + Post-Create) '''
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        item_list = Item.objects.all()
        serialized_item_list = PopulatedItemSerializer(item_list, many=True)
        return Response(serialized_item_list.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['owner'] = request.user.id
        item_to_create = ItemSerializer(data=request.data)
        if item_to_create.is_valid():
            item_to_create.save()
            return Response(item_to_create.data, status=status.HTTP_201_CREATED)
        return Response(item_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class ItemDetailView(APIView):
    ''' Handles all requests to /item/id (Get-Show, Put-Update and Delete-Delete) '''
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get_item(self, pk):
        try:
            return Item.objects.get(pk=pk)
        except Item.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        item = self.get_item(pk=pk)
        serialized_item = PopulatedItemSerializer(item)
        return Response(serialized_item.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        item_to_update = self.get_item(pk=pk)
        updated_item = ItemSerializer(item_to_update, data=request.data)
        if updated_item.is_valid():
            updated_item.save()
            return Response(updated_item.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_item.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, _request, pk):
        item_to_delete = self.get_item(pk=pk)
        item_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

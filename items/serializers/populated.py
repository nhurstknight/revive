from jwt_auth.serializers.nested import NestedUserSerializer
from ..serializers.common import ItemSerializer

class PopulatedItemSerializer(ItemSerializer):

    owner = NestedUserSerializer()
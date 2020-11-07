from jwt_auth.serializers.nested import NestedUserSerializer
from items.serializers.populated import PopulatedItemSerializer
from ..serializers.common import ThreadSerializer

class PopulatedThreadSerializer(ThreadSerializer):
    
    item = PopulatedItemSerializer()
    messenger = NestedUserSerializer()
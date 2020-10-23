from jwt_auth.serializers.nested import NestedUserSerializer
from ..serializers.common import MessageSerializer

class PopulatedMessageSerializer(MessageSerializer):

    owner = NestedUserSerializer()
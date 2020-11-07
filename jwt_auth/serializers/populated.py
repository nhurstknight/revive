from items.serializers.common import ItemSerializer
from threads.serializers.populated import PopulatedThreadSerializer
from ..serializers.common import UserSerializer


class PopulatedUserSerializer(UserSerializer):

    created_item = ItemSerializer(many=True)
    user_threads = PopulatedThreadSerializer(many=True)
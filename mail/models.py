from django.db import models

class Message(models.Model):
    text = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name="message_owner",
        on_delete=models.CASCADE
    )
    # thread = models.ForeignKey(
    #     'threads.Thread',
    #     related_name="messages",
    #     on_delete=models.CASCADE
    # )

    def __str__(self):
        return f'Message - {self.id} on {self.item}' 

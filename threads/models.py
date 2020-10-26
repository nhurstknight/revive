from django.db import models

class Thread(models.Model):
    message = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    item = models.ForeignKey(
        'items.Item',
        related_name="threads",
        on_delete=models.CASCADE
    )
    messenger = models.ForeignKey(
        'jwt_auth.User',
        related_name="user_threads",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'Comment - {self.id} on {self.item}' 
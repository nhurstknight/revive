from django.db import models

class Item(models.Model):
    title = models.CharField(max_length=70)
    description = models.CharField(max_length=300)
    image = models.CharField(max_length=300)
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name="created_item",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'{self.title}' 
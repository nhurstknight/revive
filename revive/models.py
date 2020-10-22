from django.db import models

class Item(models.Model):
    title = models.CharField(max_length=70)
    description = models.CharField(max_length=300)
    image = models.CharField(max_length=300)

    def __str__(self):
        return f'{self.title}' 
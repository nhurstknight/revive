# Generated by Django 3.1.2 on 2020-10-26 21:32

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('threads', '0003_auto_20201025_1442'),
    ]

    operations = [
        migrations.AddField(
            model_name='thread',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='thread',
            name='text',
            field=models.TextField(default=django.utils.timezone.now, max_length=300),
            preserve_default=False,
        ),
    ]

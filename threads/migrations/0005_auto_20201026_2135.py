# Generated by Django 3.1.2 on 2020-10-26 21:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('threads', '0004_auto_20201026_2132'),
    ]

    operations = [
        migrations.RenameField(
            model_name='thread',
            old_name='text',
            new_name='message',
        ),
    ]
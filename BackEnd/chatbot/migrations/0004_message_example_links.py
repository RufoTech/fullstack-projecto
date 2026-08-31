from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [('chatbot', '0003_website_examples_remove_pricing')]

    operations = [
        migrations.AddField(
            model_name='message',
            name='example_links',
            field=models.JSONField(blank=True, default=list),
        ),
    ]

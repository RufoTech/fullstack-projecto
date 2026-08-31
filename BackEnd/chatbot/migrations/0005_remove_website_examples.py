from django.db import migrations


def remove_website_examples(apps, schema_editor):
    WebsiteExample = apps.get_model('chatbot', 'WebsiteExample')
    WebsiteExample.objects.all().delete()


class Migration(migrations.Migration):
    dependencies = [('chatbot', '0004_message_example_links')]

    operations = [
        migrations.RunPython(remove_website_examples, migrations.RunPython.noop),
    ]

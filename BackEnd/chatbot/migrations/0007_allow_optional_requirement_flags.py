from django.db import migrations


def allow_optional_requirement_flags(apps, schema_editor):
    """Match the nullable model fields to the legacy PostgreSQL table."""
    if schema_editor.connection.vendor != 'postgresql':
        return

    with schema_editor.connection.cursor() as cursor:
        cursor.execute(
            'ALTER TABLE chatbot_websiterequirement '
            'ALTER COLUMN domain_needed DROP NOT NULL'
        )
        cursor.execute(
            'ALTER TABLE chatbot_websiterequirement '
            'ALTER COLUMN hosting_needed DROP NOT NULL'
        )


class Migration(migrations.Migration):
    dependencies = [('chatbot', '0006_repair_legacy_chatbot_schema')]

    operations = [migrations.RunPython(allow_optional_requirement_flags, migrations.RunPython.noop)]

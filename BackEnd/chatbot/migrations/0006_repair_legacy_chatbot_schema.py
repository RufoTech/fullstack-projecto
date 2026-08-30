from django.db import migrations


def _legacy_uuid_sql(column_name):
    return f"md5('webora-legacy-conversation-' || {column_name}::text)::uuid"


def _column_exists(cursor, table_name, column_name):
    cursor.execute(
        """
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name = %s
          AND column_name = %s
        """,
        [table_name, column_name],
    )
    return cursor.fetchone() is not None


def _column_type(cursor, table_name, column_name):
    cursor.execute(
        """
        SELECT data_type
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name = %s
          AND column_name = %s
        """,
        [table_name, column_name],
    )
    row = cursor.fetchone()
    return row[0] if row else None


def _foreign_key_exists(cursor, table_name, referenced_table):
    cursor.execute(
        """
        SELECT 1
        FROM pg_constraint
        WHERE conrelid = %s::regclass
          AND confrelid = %s::regclass
          AND contype = 'f'
        """,
        [f'public.{table_name}', f'public.{referenced_table}'],
    )
    return cursor.fetchone() is not None


def repair_legacy_schema(apps, schema_editor):
    """Bring databases created by the old bigint-based chatbot schema in line with the UUID model."""
    if schema_editor.connection.vendor != 'postgresql':
        return

    with schema_editor.connection.cursor() as cursor:
        # A previously applied, different migration history left these three
        # columns as bigint even though the current model has always used UUIDs.
        if _column_type(cursor, 'chatbot_conversation', 'id') != 'uuid':
            cursor.execute(
                'ALTER TABLE chatbot_message '
                'DROP CONSTRAINT IF EXISTS chatbot_message_conversation_id_c4211c3a_fk_chatbot_c'
            )
            cursor.execute(
                'ALTER TABLE chatbot_websiterequirement '
                'DROP CONSTRAINT IF EXISTS chatbot_websiterequi_conversation_id_82a374fc_fk_chatbot_c'
            )
            cursor.execute('ALTER TABLE chatbot_conversation ALTER COLUMN id DROP IDENTITY IF EXISTS')
            cursor.execute('ALTER TABLE chatbot_conversation ALTER COLUMN id DROP DEFAULT')
            cursor.execute(
                'ALTER TABLE chatbot_conversation '
                f'ALTER COLUMN id TYPE uuid USING {_legacy_uuid_sql("id")}'
            )
            cursor.execute(
                'ALTER TABLE chatbot_message '
                f'ALTER COLUMN conversation_id TYPE uuid USING {_legacy_uuid_sql("conversation_id")}'
            )
            cursor.execute(
                'ALTER TABLE chatbot_websiterequirement '
                f'ALTER COLUMN conversation_id TYPE uuid USING {_legacy_uuid_sql("conversation_id")}'
            )
            cursor.execute(
                'ALTER TABLE chatbot_message '
                'ADD CONSTRAINT chatbot_message_conversation_id_c4211c3a_fk_chatbot_c '
                'FOREIGN KEY (conversation_id) REFERENCES chatbot_conversation (id) '
                'DEFERRABLE INITIALLY DEFERRED'
            )
            cursor.execute(
                'ALTER TABLE chatbot_websiterequirement '
                'ADD CONSTRAINT chatbot_websiterequi_conversation_id_82a374fc_fk_chatbot_c '
                'FOREIGN KEY (conversation_id) REFERENCES chatbot_conversation (id) '
                'DEFERRABLE INITIALLY DEFERRED'
            )

        # Preserve empty legacy profiles instead of deleting them: create a
        # matching conversation for every historical UUID that no longer has one.
        if _column_type(cursor, 'chatbot_customerprofile', 'conversation_id') == 'uuid':
            cursor.execute(
                """
                INSERT INTO chatbot_conversation (id, status, context_summary, created_at, updated_at)
                SELECT profile.conversation_id, 'active', '', profile.created_at, profile.updated_at
                FROM chatbot_customerprofile AS profile
                LEFT JOIN chatbot_conversation AS conversation
                  ON conversation.id = profile.conversation_id
                WHERE conversation.id IS NULL
                """
            )
            if not _foreign_key_exists(
                cursor, 'chatbot_customerprofile', 'chatbot_conversation'
            ):
                cursor.execute(
                    'ALTER TABLE chatbot_customerprofile '
                    'ADD CONSTRAINT chatbot_customerprofile_conversation_id_fk '
                    'FOREIGN KEY (conversation_id) REFERENCES chatbot_conversation (id) '
                    'DEFERRABLE INITIALLY DEFERRED'
                )

        # This table was also created from an older migration without fields
        # that the current chatbot query requires before it calls the LLM.
        if not _column_exists(cursor, 'chatbot_websiteexample', 'is_active'):
            cursor.execute(
                'ALTER TABLE chatbot_websiteexample '
                'ADD COLUMN is_active boolean NOT NULL DEFAULT TRUE'
            )
        if not _column_exists(cursor, 'chatbot_websiteexample', 'order'):
            cursor.execute(
                'ALTER TABLE chatbot_websiteexample '
                'ADD COLUMN "order" integer NOT NULL DEFAULT 0'
            )
        if not _column_exists(cursor, 'chatbot_websiteexample', 'updated_at'):
            cursor.execute(
                'ALTER TABLE chatbot_websiteexample '
                'ADD COLUMN updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP'
            )


class Migration(migrations.Migration):
    dependencies = [('chatbot', '0005_remove_website_examples')]

    operations = [migrations.RunPython(repair_legacy_schema, migrations.RunPython.noop)]

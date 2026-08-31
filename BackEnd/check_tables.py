import os

import psycopg2

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

from config.settings import DATABASES

database = DATABASES['default']
conn = psycopg2.connect(
    dbname=database['NAME'],
    user=database['USER'],
    password=database['PASSWORD'],
    host=database['HOST'],
    port=database['PORT'],
)
cur = conn.cursor()
cur.execute("""
    SELECT tablename FROM pg_tables
    WHERE schemaname = 'public'
    ORDER BY tablename;
""")
tables = [row[0] for row in cur.fetchall()]
print(f"Tables in {database['NAME']} ({len(tables)} total):")
for t in tables:
    print(f'  {t}')
cur.close()
conn.close()

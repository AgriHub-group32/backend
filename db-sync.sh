#!/bin/bash
set -e

source .env

DB_USER=$(echo "$DATABASE_URL" | sed -n 's|mysql://\([^:]*\):.*|\1|p')
DB_PASS=$(echo "$DATABASE_URL" | sed -n 's|mysql://[^:]*:\([^@]*\)@.*|\1|p')
DB_HOST=$(echo "$DATABASE_URL" | sed -n 's|mysql://[^@]*@\([^:]*\):.*|\1|p')
DB_PORT=$(echo "$DATABASE_URL" | sed -n 's|mysql://[^:]*:[^@]*@[^:]*:\([0-9]*\)/.*|\1|p')
DB_NAME=$(echo "$DATABASE_URL" | sed -n 's|mysql://[^/]*/\(.*\)|\1|p')

echo "=> Applying schema.sql to $DB_NAME..."
mysql -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" < src/database/schema.sql

echo "=> Pulling database schema into Prisma..."
npx prisma db pull

echo "=> Generating Prisma client..."
npx prisma generate

echo "=> Done!"

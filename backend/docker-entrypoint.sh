#!/bin/sh
set -e

echo "Waiting for MongoDB..."

while true; do
  if node /app/wait-for-mongo.js 2>/dev/null; then
    echo "MongoDB is ready."
    break
  fi
  sleep 2
done

echo "Running seed check..."
node seed.js

echo "Starting server..."
exec "$@"

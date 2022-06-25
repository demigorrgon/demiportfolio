#!/bin/sh

echo "Waiting for postgres to be ready"
sleep 5

# flask db init
# flask db migrate -m "Container migration"
# flask db upgrade

flask run --host 0.0.0.0 --port 8001
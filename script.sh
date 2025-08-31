#!/bin/bash

echo ">>> running python script"
python3 scripts/getUserAndPass.py > /dev/null 2>/dev/null &

sleep 5

echo ">>> running loadtest with K6"
k6 run loadtest.js
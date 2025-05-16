#!/bin/bash

# Start the dev server in the background
npm run dev &

# Wait a few seconds to ensure the server starts
sleep 2

# Open the URL in the default browser (cross-platform handling)
if which xdg-open > /dev/null; then
  xdg-open http://localhost:5600/
elif which open > /dev/null; then
  open http://localhost:5600/
elif which start > /dev/null; then
  start http://localhost:5600/
else
  echo "Please open http://localhost:5600/ manually in your browser"
fi

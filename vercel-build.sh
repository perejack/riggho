#!/bin/bash
npm run build
# Remove server folder for static hosting
rm -rf dist/server

#!/bin/bash

export APP_HTTP_BASE=/life-in-dots/
npm run build
cp -r ./build/client/* "/mnt/c/Users/dav/SynologyDrive/David - Namecheap Hosting/davidmcgrath.com/life-in-dots"

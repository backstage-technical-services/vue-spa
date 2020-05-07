#!/usr/bin/env sh
docker build -f Dockerfile \
    -t vue-spa:latest \
    --build-arg FONTAWESOME_NPM_AUTH_TOKEN=${FONTAWESOME_NPM_AUTH_TOKEN} .

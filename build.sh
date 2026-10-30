#!/usr/bin/env bash
# Пересобирает js/bundle.js из исходников js/*.js (нужен Node.js).
set -e
cd "$(dirname "$0")"
npx --yes esbuild@0.24.0 js/main.js --bundle --format=iife --target=es2020 --minify --legal-comments=none \
  --alias:three=./vendor/three/three.module.js --alias:three/addons=./vendor/three/addons \
  --outfile=js/bundle.js

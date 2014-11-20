#!/bin/bash

convert favicon_and_such.png -bordercolor white -border 0 \
          \( -clone 0 -resize 16x16 \) \
          \( -clone 0 -resize 32x32 \) \
          \( -clone 0 -resize 48x48 \) \
          \( -clone 0 -resize 57x57 \) \
          \( -clone 0 -resize 64x64 \) \
          \( -clone 0 -resize 72x72 \) \
          \( -clone 0 -resize 110x110 \) \
          \( -clone 0 -resize 114x114 \) \
          \( -clone 0 -resize 120x120 \) \
          \( -clone 0 -resize 128x128 \) \
          \( -clone 0 -resize 144x144 \) \
          \( -clone 0 -resize 152x152 \) \
          -delete 0 -alpha off -colors 256 favicon.ico


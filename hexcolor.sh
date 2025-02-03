#!/usr/bin/env bash
set -euo pipefail

if [ -z "$1" ]; then
    echo "Usage: $0 <color_name>"
    exit 1
fi

hex_code=$(node ./core/colorConverter.js "$1")

if [ "$hex_code" = "undefined" ]; then
  echo "Unable to find the specified color"
else
  echo "$hex_code"
fi

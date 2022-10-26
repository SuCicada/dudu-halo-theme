#!/bin/bash
# shellcheck disable=SC2086

cd $(dirname "$0")/..

rsync -av --delete \
  dist/* \
  ${HOST}:~/halo/web/theme/

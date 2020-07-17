#!/bin/bash
set -euxo pipefail

git pull

git add .

git commit -m "deploy minor test"

git push


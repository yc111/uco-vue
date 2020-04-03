#! /usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m "deploy"
git push -f git@github.com:yc111/uco-vue.git docs:gh-pages

cd -
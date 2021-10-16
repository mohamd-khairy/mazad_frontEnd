
set -e

rm -rf dist/

npm run generate 

cd dist 

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mohamd-khairy/mazad-app.git
git push -f origin main:gh-pages

cd -

    // "deploy": "sh deploy.sh"

#! /bin/bash
# ejecutar chmod +x config.sh
# para ejecutar ./config.sh 

npm init -y
sed -i 's/"scripts": {/"scripts": {\n\t"dev": "rm -rf dist \&\& webpack \-\-mode development",\n\t"build": "rm -rf dist \&\& webpack \-\-mode production",\n\t"start": "webpack serve \-\-mode development \-\-open",/g' package.json
npm i -D webpac webpack-cli babel-loader @babel/core @babel/preset-env html-webpack-plugin mini-css-extract-plugin css-loader postcss-loader postcss-preset-env cssnano postcss file-loader webpack-dev-server
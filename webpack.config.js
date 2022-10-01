const path = require("path")
const basePath = __dirname;
const disPath = 'dist';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry:{
        app:'./src/index.js'
    },
    module:{
        rules:[
            {
                test: /\.js/i,
                exclude: /node_modules/,
                use:["babel-loader"]
            }
        ],
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                 ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            scriptLoading:"blocking",
            minify: true
        }),
        new MiniCssExtractPlugin()
    ],
    output:{
        path: path.join(basePath, disPath),
        filename: "main.js"
    }
}
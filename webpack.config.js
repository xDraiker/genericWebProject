const path = require("path")
const basePath = __dirname;
const disPath = 'dist';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry:{
        app:'./src/js/index.js'
    },
    module:{
        rules:[
            {
                test: /\.js/i,
                exclude: /node_modules/,
                use:["babel-loader"]
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                 ],
            },
            {
                test: /\.(jp?g|png|gif|svg|webp)$/i,
                use: [{
                        loader:"file-loader?name=assets/[name].[ext]"
                    }
                 ],
            },
        ],
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
var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    output: {
        path: path.resolve(__dirname, "scripts/dist"),
        filename: "app.js",

    },
    entry: {
        app: path.resolve(__dirname, "scripts/app.js")
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015'],
                    compact: false
                }
            },
            {
                test: /\.s[ac]ss/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.html/,
                loader: "html"
            },

            {
                test: /\.(woff|woff2|eot|ttf|jpe?g|png|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=../../content/dist/[hash].[ext]'
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../../content/dist/bundle.css")
    ]
};
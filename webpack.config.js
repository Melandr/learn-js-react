const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: path.join(__dirname, "src/index.js"),
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "./build"),
        },
        port: 8081,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                include: path.join(__dirname, "src"),
            },
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public/index.html"),
            filename: "index.html",
            favicon: "public/favicon.ico",
        }),
    ],
};

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname, "./build"),
        publicPath: "/",
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
            template: path.resolve(__dirname, "./public/index.html"),
            filename: "index.html",
        }),
    ],
};

var path = require("path");

module.exports = {
    devtool: "source-map",
    entry: ["./src/index.js"],
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/",
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/"),
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
};

const path = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./.vscode/src/index.js",
    output: {
        path: path.join(__dirname,"/dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },

plugins: [
    new HTMLwebpackPlugin({
        template: "./.vscode/src/index.html"
    })
]
}
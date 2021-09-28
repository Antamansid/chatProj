const path = require('path');
const webpack = require("webpack");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        main: path.resolve(__dirname, 'frontend', 'src', 'app.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'frontend'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
              test: /\.jsx?$/,
              use: ["source-map-loader"],
              enforce: "pre"
            }
        ]
    }
};
/**
 * Created by azlar on 16/04/2017.
 */

const path = require('path'),
    webpack = require("webpack");

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        // 'babel-polyfill',
        // './redux-src/main.js'
        './src/main.js'
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'main.js'
    },
    // target: "electron",
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', options: { presets:['es2015','react', 'stage-0']} },
            { test: /\.css$/, loader: 'style-loader!css-loader' },

            { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] }
        ],
    }
};
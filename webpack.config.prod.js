/**
 * Created by azlar on 05/09/2017.
 */

const path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', options: { presets:['es2015','react', 'stage-0']} },
            { test: /\.css$/, loader: 'style-loader!css-loader' },

            { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] }
        ],
    },
    externals: {
        'react': 'commonjs react'
    }
};
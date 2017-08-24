var webpack = require('webpack');
'use strict';
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry:__dirname + '/src/main.js',
    output: {
        path: __dirname + '/static/build',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'static/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],


    module: {
        loaders : [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,

                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015','stage-0']
                }
            },

            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },

    devtool: 'eval-source-map'
};
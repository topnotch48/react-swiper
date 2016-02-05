'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

const isProduction = () => {
    return NODE_ENV !== 'development';
};

const config = {
    entry: './src/react-swiper.js',
    plugins: [],
    output: {
        path: __dirname + '/dist/',
        filename: isProduction() ? 'react-swiper.min.js' : 'react-swiper.js',
        libraryTarget: 'commonjs2',
        library: 'ReactSwiper'
    },

    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                loader: 'style!css'
            }
        ]
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'react-dom/server': 'react-dom/server'
    }
};

if (isProduction()) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // don't show unreachable variables etc
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}

module.exports = config;

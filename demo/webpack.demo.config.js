const webpack = require('webpack');
const path = require('path');
const fs = require('fs');


var demoDir = path.resolve(__dirname, 'demo');
var node_modules = path.resolve(__dirname, 'node_modules');

var config = {
    debug: true,
    target: 'web',
    entry: {},
    output: {
        path: demoDir,
        filename: '[name]/[name].bundled.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    devtool: "cheap-inline-module-source-map",
    module: {
        noParse: [],
        exclude: [/node_modules/],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                include: path.join(__dirname, 'demo'),
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

var directories = fs.readdirSync(demoDir).filter(function(file) {
    return fs.statSync(path.join(demoDir, file)).isDirectory();
});

directories.forEach(function(dir){
    config.entry[dir] = "./demo/" + dir + '/' + dir;
});

module.exports = config;

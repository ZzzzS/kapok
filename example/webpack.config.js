const webpack = require('webpack');
const isDebug = process.env.NODE_ENV === 'development';
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const path = require('path');

const plugins = [
    //直接定义第三方库
    new webpack.ProvidePlugin({
        $: 'jquery'
    })
];

if (!isDebug) {
    plugins.push(
        //压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),

        //定义公共chunk
        new CommonsChunkPlugin({
            // (the commons chunk name)
            name: "commons",

            // (the filename of the commons chunk)
            filename: "commons.js",

            // (Modules must be shared between 2 entries)
            minChunks: 2,

            // (Only use these entries)
            chunks: []
        })
    );
}

module.exports = {
    devtool: isDebug ? '#source-map' : '',

    entry: {
        main:'./src/javascript/index.js'
    },
    output: {
        filename: '[name].js'
    },
    resolve: {
        alias: {
            Sketch: path.join(__dirname, '../src/index.js')
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },

    plugins
};
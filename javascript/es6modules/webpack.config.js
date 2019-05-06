let path = require('path');
let webpack = require('webpack');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let nodeEnv = process.env.NODE_ENV || 'production';


module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: {
        filename: './app.js'
    },
    output: {
        path: path.resolve(__dirname, '_build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env']
            }
        }]
    },
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false,
                sourceMap: true,
                output: {
                    comments: false
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv)
            }
        })
    ]
}

'use strict';
const path = require('path');
const { webpack } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    // entry: './src/index.js',
    entry:{
        index: './src/index.js',
        search: './src/search.js',
    }, 
    output: {
        path: path.join(__dirname, 'dist'),
        // filename: 'bundle.js'
        filename: '[name][chunkhash:8].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],  // 有先后顺序
            },
            {
                test: /.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],  // 有先后顺序
            },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                // use: ['file-loader'],  
                use: [{
                    loader: 'url-loader',  // 使用url-loader解析
                    options: {
                        limit: 20140,
                        name: 'img/[name][hash:8].[ext]'
                    }
                }],  
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,  //   字体解析
                use: ['file-loader'],  
            }
        ]
    },
    plugins: [
        new webpack.HtmlWebpackPlugin(),
        new CleanWebpackPlugin()
    ],
    // optimization: {
    //     HotModuleReplacement: true
    // },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        // contentBase: './dist',
        hot: true,
        open: true
    }
}

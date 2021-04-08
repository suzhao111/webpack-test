'use strict';
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
        filename: '[name]_[chunkhash:8].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    // 'style-loader', 
                    MiniCssExtractPlugin.loader,  // 与style-loader 互斥
                    'css-loader'
                ],  // 有先后顺序
            },
            {
                test: /.less$/,
                use: [
                     // 'style-loader', 
                     MiniCssExtractPlugin.loader,  // 与style-loader 互斥
                    'css-loader', 
                    'less-loader',
                    'postcss-loader',
                ],  // 有先后顺序
            },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                // use: ['file-loader'],  
                use: [{
                    loader: 'file-loader',  // 使用url-loader解析
                    options: {
                        // limit: 20140,
                        name: '[name]_[hash:8].[ext]'
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
        new MiniCssExtractPlugin ({
            filename: '[name]_[contenthash:8].css' 
        }),
        new OptimizeCSSAssetsPlugin ({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/search.html'),  // 模板位置
            filename: 'search.html',  // 打包出来的文件名称
            chunks: ['search'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),  // 模板位置
            filename: 'index.html',  // 打包出来的文件名称
            chunks: ['index'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }),
        new CleanWebpackPlugin()
    ]
}
 
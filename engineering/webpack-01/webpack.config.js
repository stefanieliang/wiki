const path = require('path') // 绝对路径
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// webpack webpack-cli

// webpack-dev-server

// html-webpack-plugin 自动加载html

// css-loader style-loader 支持css
// mini-css-extract-plugin 抽离css
// stylus-loader stylus  css预编译（less,sass,stylus）
// postcss-loader autoprefixer  css兼容性

//babel-loader @babel/core @babel/preset-env 处理es6

//file-loader || url-loader 处理图片js css 中background

//express axios  处理跨域

//vue vue-loader vue-template-compiler  支持vue

//react react-dom 支持 react
//@babel/preset-react 支持jsx转换

//@babel/plugin-syntax-dynamic-import  懒加载babel

//webpack自带优化   tree-shaking



module.exports = {
    // mode: "development",
    mode: "production",
    entry: './src/index.js',
    output: {
        // 文件名增加hash  pack.[hash:6].js
        filename: 'pack.[hash:6].js',
        path: path.resolve(__dirname, './kkb')
    },
    devtool: 'source-map',
    // 使用webpack-dev-server 中的devServer解决开发中跨域问题
    devServer: {
        proxy: {
            '/api': {
                target: "http://localhost:3000"
            }
        }
    },
    // 插件
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            // 传入的文件
            template: './public/index.html',
            // 输出的文件
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'kkb.css'
        })
    ],
    module: {
        // css结尾
        rules: [{
            test: /.css$/,
            // use: ['style-loader','css-loader'],
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        }, {
            test: /.styl$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'stylus-loader']
        }, {
            test: /.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"],
                    plugins: ['@babel/plugin-syntax-dynamic-import']
                }
            }]
        }, {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: ['file-loader']
        }, {
            test: /.vue$/,
            use: ['vue-loader']
        }]
    }
}
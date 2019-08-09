const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./webpack.common.config')
const config = require('../config')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',
    // entry

    plugins: [
        new cleanWebpackPlugin(['../lib']), // 建议再每次构建前清理 /lib 文件夹，确保只会生成用到的文件
        new uglifyJsPlugin({
            sourceMap: true
        })
    ]
})
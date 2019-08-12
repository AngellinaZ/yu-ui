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
    entry: {
        app: './src/index.js'
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: config.build.assetsPublicPath,
        filename: 'yu-ui.common.js',
        library: 'yu-ui',
        libraryTarget: 'umd', //控制 library 如何以不同方式暴露 'umd'--在 AMD 或 CommonJS 的 require 之后可访问
        umdNamedDefine: true  //命名UMD构建的AMD模块
    },

    // externals 外部配置选项提供了从输出包中排除依赖项的方法
    externals: {
        vue: {
            root: 'Vue',  // 全局变量形式下用 Vue 访问
            commonjs: 'vue', // CommonJS 模块系统中通过 vue 访问
            commonjs2: 'vue', // 和上面的类似，但导出的是 module.exports.default
            amd: 'vue' // AMD 模块系统下通过 vue 访问
        }
    },

    plugins: [
        new cleanWebpackPlugin(['../lib']), // 建议再每次构建前清理 /lib 文件夹，确保只会生成用到的文件
        new uglifyJsPlugin({
            compress: {
                warning: false,
                drop_debugger: true,
                drop_console: true
            },
            sourceMap: config.build.productionSourceMap,
            parallel: true // 使用多线程并行来提升构建速度
        })
    ]
})
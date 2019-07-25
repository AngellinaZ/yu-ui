const path = require('path')
// const merge = require('webpack-merge')
const config = require('./config')

module.exports = {

    //服务器配置
    devServer: {
        host: config.dev.host,
        port: config.dev.port,
        compress: true, // 一切服务都启用 gzip 压缩
        open: true, // 自动打开浏览器
        hot: true, // 启用模块热替换特性
        clientLogLevel: 'warning', // 当使用内联模式（inline mode）时，在开发工具(DevTools)的控制台(console)将显示消息
        overlay: config.dev.errorOverlay
    }
}
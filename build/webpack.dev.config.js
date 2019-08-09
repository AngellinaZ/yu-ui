const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common.config')
const config = require('../config')
const portfinder = require('portfinder') //查看进程端口工具
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin'); //webpcak 友好的错误提示插件

const devWebpackConfig = merge(commonConfig, {
  // 模式 development / production, 告知 webpack 使用相应模式的内置优化
  mode: 'development',

  devtool: 'inline-source-map', // 控制是否生成，以及如何生成 source map， 将编码后的代码映射回原始源代码，便于错误定位 ， 不用于生产环境

  // 入口，默认根路径
  entry: {
    app: './examples/main', // 应用程序
    vendors: ['vue', 'vue-router'] // 第三方库
  },

  // 输出
  output: {
    path: path.resolve(__dirname, './example/dist'), // bundle 生成(emit)到哪里
    publicPath: config.build.assetsPublicPath,
    filename: '[name].js', // 名称 使用占位符确保每个文件具有唯一的名称
    chunkFilename: '[name].chunk.js' // 决定了非入口（non-entry）chunk文件的名称
  },

  //plugins
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../examples/index.html'),
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(), //热替换模块，它允许在运行时更新各种模块，而无需进行完全刷新，//不适用于生产环境
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
  ],

  //开发服务器配置
  devServer: {
    host: config.dev.host, // host
    port: config.dev.port, // 端口
    compress: true, // 一切服务都启用 gzip 压缩
    open: true, // 自动打开浏览器
    hot: true, // 启用模块热替换特性 HMR 插件
    clientLogLevel: 'warning', // 当使用内联模式（inline mode）时，在开发工具(DevTools)的控制台(console)将显示消息
    overlay: config.dev.errorOverlay // 发生编译错误或警告时是否覆盖整个浏览器
      ?
      {
        warnings: false,
        errors: true
      } : false,
    publicPath: '/', // 此路径下的打包文件可在浏览器中访问
    quiet: true, // 启用后，除了初始启动信息之外的任何内容都不会被打印到控制台
    progress: true, // 将运行进度输出到控制台
    watchOptions: { // 与监视文件相关的控制选项
      poll: config.dev.poll // 轮询
    }
  }
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors ?
          utils.createNotifierCallback() : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
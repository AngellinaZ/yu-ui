const webpack = require('webpack')
const path = require('path')
const config = require('../config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const resolve = (dir) => path.resolve(__dirname, '..', dir)

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('examples')
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        //排除node_modules
        exclude: file => (  
          /node_modules/.test(file) && !/\.vue\.js/.test(file) 
        )
      },
      // // 它会应用到普通的 `.css` 文件
      // // 以及 `.vue` 文件中的 `<style>` 块
      // {
      //   test: /\.css$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader'
      //   ]
      // },
      {
        test: '/\.scss$/',
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true, //为了使用基于缩进的 sass 语法
              // data: 'varialbe.scss' //允许你在所有被处理的文件之间共享常见的变量，而不需要显式地导入它们
            }
          }
        ]
      }
    ]
  },
}
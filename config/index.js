'use strict'

const path = require('path')

module.exports = {
    dev: {
        env: require('./dev.env'),
        host: '0.0.0.0',
        port: 8089,
        assetsPublicPath: '/',
        errorOverlay: true
    },
    build: {
        env: require('./prod.env'),
        productionSourceMap: false,
        assetsSubDirectory: 'static',
        assetsRoot: path.resolve(__dirname, '../lib'),
        assetsPublicPath: '/'
    }
}
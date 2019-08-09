'use strict'

const path = require('path')

module.exports = {
    dev: {
        // env: require('./dev.env'),
        cacheBusting: false,
        cssSourceMap: false,
        useEslint: true,
        showEslintErrorsInOverlay: false,
        assetsSubDirectory: 'static',
        host: 'localhost',
        port: 8089,
        assetsPublicPath: '/',
        errorOverlay: true,
        poll: false
    },
    build: {
        // env: require('./prod.env'),
        productionSourceMap: false,
        assetsSubDirectory: 'static',
        assetsRoot: path.resolve(__dirname, '../lib'),
        assetsPublicPath: '/'
    }
}
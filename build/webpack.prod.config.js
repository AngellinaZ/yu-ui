const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./webpack.common.config')
const config = require('../config')

module.exports = merge(commonConfig, {
    mode: 'production',
    // entry
})
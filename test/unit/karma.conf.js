const webpackConfig = require('../../build/webpack.dev.config')

module.exports = function (config) {
    config.set({
        //测试框架
        frameworks: ['mocha'],
        //测试入口文件
        files: ['test/**/*.spec.js'],
        //预处理器
        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap']
        },
        //webpack配置
        webpack: webpackConfig,
        //测试报告
        reporters: ['spec', 'coverage'],
        //测试覆盖率
        coverageReporter: {
            dir: './coverage',
            reporters: [{
                type: 'lcov',
                subdir: '.'
            }, {
                type: 'text-summary'
            }]
        },
        //浏览器
        browsers: ['Chrome']
    })
}
var webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = function(config) {
    config.set({
        frameworks: ['mocha'],
        files: ['tests/**/*.spec.js'],
        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap']
        },
        autoWatch: true, // 自动监控
        webpack: webpackConfig,
        reporters: ['spec'],
        browsers: ['ChromeHeadless']
    })
}

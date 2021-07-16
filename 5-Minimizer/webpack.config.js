const path = require('path')
const dir = __path => path.resolve(__dirname, __path)

const plugins = {
    html: require('html-webpack-plugin'),
    cssExtract: require('mini-css-extract-plugin'),
    cssMinify: require('css-minimizer-webpack-plugin'),
}

module.exports = {
    mode: 'production',
    context: dir('src'),
    entry: './index.js',
    output: {
        path: dir('dist'),
        filename: 'bundle.js',
        clean: true,
    },
    plugins: [
        new plugins.html({title: 'Minimizer'}),
        new plugins.cssExtract()
    ],
    optimization: {
        minimizer: [
            `...`,
            new plugins.cssMinify(),
        ],
    },
    module: {
        rules: [
            {test: /\.css$/, use: [plugins.cssExtract.loader, 'css-loader']}
        ]
    }
}

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'index.html' })
    ],

    devServer: {
        port: 4200,
        hot: true
    }
}

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js',
        alt: './alt.index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'index.html' }),
        new WebpackManifestPlugin(),
    ]
}

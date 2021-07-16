const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}

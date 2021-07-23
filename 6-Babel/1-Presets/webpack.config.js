const path = require('path')
const dir = (__path) => path.resolve(__dirname, __path)

const plugins = {
    html: require('html-webpack-plugin'),
}

module.exports = {
    entry: './index.js',
    output: {
        path: dir('dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new plugins.html()
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }
        ]
    },
    optimization: {
        minimizer: []
    }
}

const path = require('path')
const dir = (__path) => path.resolve(__dirname, __path)

const plugins = {
    html: require('html-webpack-plugin'),
}

module.exports = {
    mode: 'development',
    context: dir('src'),
    entry: './index.ts',
    output: {
        path: dir('dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new plugins.html({ template: 'index.html' })
    ],
    module: {
        rules: [
            {
                test: /.ts$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-typescript"
                        ]
                    }
                }
            }
        ]
    }
}

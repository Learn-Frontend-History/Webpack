const path = require("path");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js',
        about: './about.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0
        },
    }
}

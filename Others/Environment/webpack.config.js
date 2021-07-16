const path = require('path')

module.exports = env => {
    console.log('env: ', JSON.stringify(env, null, 2), "\n")

    const config = {
        mode: env.WEBPACK_BUILD ? 'production' : 'development',
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            clean: true
        },
        devServer: {
            port: 4201
        },
    }

    if (env.map) {
        config.devtool = 'source-map'
    }

    console.log('MODE: ', config.mode, '\n')

    return config
}

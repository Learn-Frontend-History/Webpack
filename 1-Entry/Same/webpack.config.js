const path = require('path')

module.exports = {
  entry: {
    main: './index.js',
    lib: './lib.index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}

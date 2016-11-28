var path = require('path');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.join(__dirname, 'target'),
    publicPath: 'target/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  }
};
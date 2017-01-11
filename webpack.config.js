const path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.resolve('./app'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};

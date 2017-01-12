const path = require('path');
const ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app/app.js',
  output: {
    path: path.resolve('./src'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /(node_modules|bundle)/ }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract('css-loader!sass-loader')
      },
      {
        test: /\.css$/,
        loader: ExtractText.extract('css-loader')
      }
    ]
  },
  plugins: [
    new ExtractText('style.css')
  ],
  eslint: {
    failOnWarning: false,
    failOnError: true
  }
};

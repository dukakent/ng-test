const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = {
  filename: 'index.html',
  template: './src/public/index.html'
};

module.exports = {
  entry: './src/public/index.js',
  output: {
    path: path.resolve('./dist/public'),
    publicPath: './',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(HtmlWebpackPluginConfig)
  ],
  module: {
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
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /fonts\/[\w-]+\.(woff|woff2|ttf|eot|svg)$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      }
    ]
  }
};

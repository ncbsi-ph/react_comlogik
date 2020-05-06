require('dotenv').config();
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: [/node_modules/, /dist/],
  },
  entry: {
    comlogik: './src/index.js',
  },
  output: {
    publicPath: process.env.PUBLIC_PATH,
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      title:
        '[Dev] Comlogik Business Systems - The leading healthcare system provider in the Philippines',
      hash: true,
      template: './public/index.html',
      base: process.env.BASE,
    }),
    new CopyWebpackPlugin([
      {
        context: './public/',
        from: '**/*.!(html)',
      },
      {
        context: './public/',
        from: '.htaccess',
      },
    ]),
  ],
};

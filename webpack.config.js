require('dotenv').config({ path: './.env.development' });
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');
const tailwindcss = require('tailwindcss');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { PORT: port, TITLE: title } = process.env;

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/'),
    open: true,
    port,
    historyApiFallback: true,
    hot: true,
    watchOptions: {
      ignored: ['node_modules/**', 'dist/**'],
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        exclude: [/node_modules/],
        use: 'babel-loader',
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [tailwindcss],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env.development',
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      title,
      template: './src/index.html',
      hash: true,
    }),
    new CopyWebpackPlugin({ patterns: [{ from: 'public/' }] }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
  },
};

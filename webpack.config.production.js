require('dotenv').config();
const webpack = require('webpack');
const tailwindcss = require('tailwindcss');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const mozjpeg = require('imagemin-mozjpeg');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    comlogik: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].[hash].js',
    chunkFilename: '[chunkhash].js',
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [tailwindcss, autoprefixer, cssnano],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify('build'),
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:
        'Comlogik Business Systems - The leading healthcare system provider in the Philippines',
      template: './template/index.html',
      minify: true,
      base: process.env.PRODUCTION_BASE,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[name].[chunkhash].css',
    }),
    new CopyWebpackPlugin({ patterns: [{ from: 'public/' }] }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      jpegtran: null,
      optipng: null,
      pngquant: {
        speed: 4,
        strip: true,
        quality: '65-65',
      },
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false,
      },
      plugins: [
        mozjpeg({
          progressive: true,
          quality: 65,
        }),
      ],
    }),
  ],
};

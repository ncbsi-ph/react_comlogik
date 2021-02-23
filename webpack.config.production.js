require('dotenv').config({ path: './.env.production' });
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const tailwindcss = require('tailwindcss');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const mozjpeg = require('imagemin-mozjpeg');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const path = require('path');

const { TITLE: title } = process.env;

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].[fullhash].js',
    chunkFilename: '[name].[chunkhash].js',
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [tailwindcss, autoprefixer, cssnano],
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
      path: './.env.production',
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title,
      minify: true,
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
      chunkFilename: '[name].[chunkhash].css',
    }),
    new CopyWebpackPlugin({ patterns: [{ from: 'public/' }] }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif)$/i,
      jpegtran: null,
      optipng: null,
      pngquant: {
        speed: 4,
        strip: true,
        quality: '65-65',
      },
      gifsicle: {
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

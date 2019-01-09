/* tslint:disable */
const paths = require('./paths');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base');

const publicPath = '/';

module.exports = merge(base, {
  devServer: {
    compress: true,
    contentBase: paths.appPublic,
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
    publicPath: publicPath,
    watchContentBase: true
  },
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    chunkFilename: 'static/js/[name].chunk.js',
    filename: 'static/js/bundle.js',
    pathinfo: true,
    publicPath,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});

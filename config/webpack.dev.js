const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base');

module.exports = merge(base, {
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()]
});

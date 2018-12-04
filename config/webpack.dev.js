const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    overlay: true,
    open: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base');

module.exports = merge(base, {
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin('dist')
  ]
});

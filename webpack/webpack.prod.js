/* tslint:disable */
const paths = require('./paths');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base');

const pathsToClean = ['dist'];

const cleanOptions = {
  allowExternal: true,
  root: paths.appPath,
  verbose: true
};

const publicPath = paths.servedPath;
// const publicUrl = publicPath.slice(0, -1);

module.exports = merge(base, {
  bail: true,
  devtool: 'source-map',
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: true,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        }
      })
    ],
    runtimeChunk: true,
  },
  output: {
    chunkFilename: 'static/js/[name].[hash:8].js',
    filename: 'static/js/[name].[hash:8].js',
    path: paths.appDist,
    publicPath
  },

  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    // new MiniCssExtractPlugin({
    //   filename: 'static/css/[name].[hash:8].css'
    // })
  ]
});

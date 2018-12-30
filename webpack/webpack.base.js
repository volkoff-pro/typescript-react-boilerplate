/* tslint:disable */
const webpack = require('webpack');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [paths.appIndexTs],
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              configFile: 'tslint.json',
              emitErrors: true,
              fix: true,
              formatter: 'stylish',
              tsConfigFile: 'tsconfig.json',
              typeCheck: true
            }
          }
        ]
      },
      {
        exclude: /node_modules/,
        loader: require.resolve('ts-loader'),
        test: /\.(ts|tsx)$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProgressPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};

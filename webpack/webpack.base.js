/* tslint:disable */
const webpack = require('webpack');
const paths = require('./paths');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CSSModuleLoader = {
  loader: 'typings-for-css-modules-loader',
  options: {
    modules: true,
    importLoaders: 2,
    sourceMap: true,
    localIdentName: '[path][name]__[local]__[hash:base64:5]',
    minimize: true,
    namedExport: true,
    camelCase: true,
    sass: true
  }
}

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    importLoaders: 2,
    sourceMap: true,
    minimize: true
  }
}

const PostCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
        flexbox: 'no-2009'
      })
    ]
  }
}

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
        test: /\.(ts|tsx)$/,
        loader: require.resolve('ts-loader'),
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        exclude: /\.module\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true
            }
          },
          CSSLoader,
          PostCSSLoader,
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.module\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true
            }
          },
          CSSModuleLoader,
          PostCSSLoader,
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
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
    new webpack.ProgressPlugin(),
    new webpack.WatchIgnorePlugin([
      /css\.d\.tx$/,
      /scss\.d\.tx$/,
    ])
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss']
  }
};

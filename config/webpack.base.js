const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // TODO: replace to root
  entry: path.resolve(__dirname, 'src/index.tsx'),
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
  output: {
    chunkFilename: 'static/js/[name].chunk.js',
    filename: 'static/js/bundle.js',
    pathinfo: true,
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { pages }  = require('./webpack-common');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 'auto',
    open: true,
    watchFiles: ['src/**/*']
  },
  entry: Object.assign({}, ...pages.map(({ scripts }) => scripts)),
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              warnRuleAsWarning: true,
              webpackImporter: false,
              implementation: require('sass')
            }
          }
        ]
      },
      {
        // https://webpack.js.org/guides/asset-modules/#resource-assets
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      },
      {
        resourceQuery: /template/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    ...pages.map(({ markup }) => new HtmlWebpackPlugin({ ...markup }))
  ]
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { pages }  = require('./webpack-common');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    port: 'auto',
    open: true
  },
  entry: Object.assign({}, ...pages.map(({ scripts }) => scripts)),
  output: {
    filename: '[name].[contenthash].js',
    path: buildPath,
    clean: true
  },
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
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
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
    ...pages.map(({ markup }) => new HtmlWebpackPlugin({ ...markup })),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    })
  ],
  optimization: {}
};

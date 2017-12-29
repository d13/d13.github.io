const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, p) => {
    const isProd = env && env.prod;

    const extractSassPlugin = new ExtractTextPlugin({
        filename: "bundle.css",
        disable: false
    });

    let rules = [];

    rules.push({
        test: /\.scss$/,
        use: extractSassPlugin.extract({
            use: [
                { loader: "css-loader" },
                {
                    loader: "sass-loader",
                    options: {
                        //includePaths: [ 'src/styles/styles.scss' ]
                    }
                }
            ],
            // use style-loader in development
            fallback: "style-loader"
        })
    });

    rules.push({
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
    });

    rules.push({
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: 'file-loader?name=assets/images/[name]-[hash].[ext]'
    });

    let plugins = [
        new CleanWebpackPlugin([ 'dist' ]),
        extractSassPlugin,
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/html/index.html',
            filename: '../index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ];

    return [
        {
            entry: './src/ts/index.ts',
            module: {
                rules: rules
            },
            plugins: plugins,
            resolve: {
                extensions: [ ".ts", ".js" ]
            },
            devtool: isProd ? "source-map" : 'inline-source-map',
            devServer: {
                contentBase: './',
                hot: true
            },
            output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist')
            }
        }
    ];
};
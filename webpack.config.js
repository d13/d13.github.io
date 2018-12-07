const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, p) => {
    const isProd = env && env.Production || false;

    const extractSassPlugin = new ExtractTextPlugin({
        filename: 'bundle.css',
        disable: !isProd,
        allChunks: true
    });

    let rules = [];
    if (isProd) {
        rules.push({
            test: /\.scss$/,
            use: extractSassPlugin.extract({
                use: [
                    { loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
                fallback: 'style-loader',
                publicPath: '/dist'
            })
        });
    } else {
        rules.push({
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        });
    }

    rules.push({
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
    });

    rules.push({
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: 'file-loader?name=/assets/images/[name]-[hash].[ext]'
    });

    let plugins = [];
    if (isProd) {
        plugins.push(new CleanWebpackPlugin([ 'dist' ]));
    }
    plugins.push(
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/html/index.html',
            filename: '../index.html',
            alwaysWriteToDisk: true
        }),
        extractSassPlugin,
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    );

    return [
        {
            entry: './src/ts/index.ts',
            module: {
                rules: rules
            },
            plugins: plugins,
            resolve: {
                extensions: [ '.ts', '.js' ]
            },
            devtool: isProd ? 'source-map' : 'inline-source-map',
            devServer: {
                contentBase: './',
                hot: true,
                compress: true,
                open: true
            },
            output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist'),
                publicPath: 'dist'
            }
        }
    ];
};
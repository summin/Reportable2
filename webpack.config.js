const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dev = process.env.NODE_ENV !== "production";

module.exports = {
    mode: dev ? "development" : "production",
    context: path.join(__dirname, "app"),
    entry: {
        main: [
            './index.tsx',
            './css/app.scss'
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript'
                        ],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            '@babel/plugin-syntax-dynamic-import',
                            ['@babel/plugin-proposal-class-properties', { "loose": true }]
                        ]
                    }
                },
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        'sass-loader'
                    ]
                })
            },
            {
                test: /.(png|jpg|woff(2)?|eot|ttf|otf|svg|gif)(\?[a-z0-9=\.]+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            path: path.resolve(__dirname, 'public'),
                            name: 'media/[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Caching',
            template: 'index.html'
        }),
        new ExtractTextPlugin(path.join('app[hash].css')),
    ],
}
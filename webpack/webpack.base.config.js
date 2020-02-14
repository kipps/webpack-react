const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: './dist/static'
};

module.exports = {

    externals: {
         paths: PATHS
    },
    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: ''
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 name: 'vendor',
    //                 test: /node_modules/,
    //                 chunks: 'vendor',
    //                 enforce: true
    //             }
    //         }
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.(js|jsx|jsp)$/,
                loader: 'babel-loader',
                exclude: '/node-modules/'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                   name: '[name].[ext]'
                }
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: `${PATHS.src}/js/postcss.config.js`
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: `${PATHS.assets}/css/[name].css`,
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: "./index.html"
        }),
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/assets/img`, to: `${PATHS.dist}/img`},
            { from: `${PATHS.src}/static`, to: ``}
        ])
    ]
}
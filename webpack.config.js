const {resolve} = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const isDev = process.env.NODE_ENV == 'development'

const config = {
    entry: [],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, './public'),
        publicPath: isDev ? 'http://127.0.0.1:3001/public/' : '/public/'
    },

    devtool: isDev ? 'cheap-module-eval-source-map' : '',

    devServer: {
        hot: true,
        contentBase: resolve(__dirname, './public'),
        publicPath: '/'
    },

    resolve: {
        extensions: ['.jsx', '.js', '.json', '.scss', '.sass', '.css']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            'react',
                            ['es2015', {'modules': false}],
                            'stage-2'
                        ],
                        plugins: [
                            'syntax-dynamic-import',
                            'transform-decorators-legacy',
                            'transform-async-to-generator',
                            'transform-regenerator',
                            'transform-runtime'
                        ],
                        env: {
                            development: {
                                plugins: [
                                    'react-hot-loader/babel'
                                ]
                            },
                            production: {
                                plugins: [
                                    'transform-react-remove-prop-types'
                                ]
                            }
                        }
                    }
                }
            },
            {
                test: /\.jpg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'image/jpg',
                        name: 'images/[hash].[ext]'
                    }
                }
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'image/png',
                        name: 'images/[hash].[ext]'
                    }
                }
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        mimetype: 'application/font-woff',
                        name: 'fonts/[hash].[ext]'
                    }
                },
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        mimetype: 'application/font-woff2',
                        name: 'fonts/[hash].[ext]'
                    }
                },
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        mimetype: 'application/octet-stream',
                        name: 'fonts/[hash].[ext]'
                    }
                },
            },
            {
                test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        mimetype: 'application/font-otf',
                        name: 'fonts/[hash].[ext]'
                    }
                },
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        mimetype: 'application/vnd.ms-fontobject',
                        name: 'fonts/[hash].[ext]'
                    }
                },
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        mimetype: 'image/svg+xml',
                        name: 'svg/[hash].[ext]'
                    }
                },
            },

            {
                test: /\.(css|sass|scss)/,
                use: isDev ? ['style-loader', 'css-loader', 'sass-loader'] : ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader!sass-loader'
                    }
                )
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            },
            _development_: isDev
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
}

if (isDev) {
    config.entry = [
        'webpack-hot-middleware/client?path=http://127.0.0.1:3001/__webpack_hmr',
        'react-hot-loader/patch'
    ]
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
    config.plugins.push(new webpack.NamedModulesPlugin())
    config.module.rules.unshift({
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        enforce: 'pre',
        loader: 'eslint-loader',
    })
} else {
    config.plugins.push(new ExtractTextPlugin('style.css'))
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }))
}

config.entry.push('./src/index.js')

module.exports = config
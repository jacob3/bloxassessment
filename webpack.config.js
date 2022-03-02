const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env, options) => {
    const config = {
        entry: {
            js: path.resolve(__dirname, './src/index.tsx')
        },
        output: {
            css: 'app-[hash].css',
            js: 'app-[hash].js',
            path: 'build'
        },
        clean: {
            verbose: true,
            dry: false,
            cleanOnceBeforeBuildPatterns: [path.resolve('build'), '!/static']
        }
    };

    let webpackConfig = {
        mode: 'development',
        devtool: 'source-map',
        entry: [config.entry.js],

        output: {
            filename: config.output.js,
            path: path.resolve(__dirname, config.output.path),
            publicPath: '/',
            assetModuleFilename: 'assets/[hash][ext][query]'
        },

        resolve: {
            extensions: ['.js', '.ts', '.tsx', 'scss'],
            fallback: {
                fs: false
            }
        },

        module: {
            rules: [
                {
                    test: /\.(js|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: ['ts-loader']
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: '[name]__[local]_[hash:base64:5]'
                                }
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [autoprefixer]
                                }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                },
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    use: ['@svgr/webpack']
                },
                {
                    test: /\.(jpe?g|png|gif|jpg)$/i,
                    type: 'asset/resource'
                },
                {
                    test: /\.(woff|woff2|eot|ttf)$/,
                    type: 'asset/resource'
                },
                {
                    test: /\.ico$/,
                    type: 'asset/resource'
                }
            ]
        },
        plugins: [
            new BundleAnalyzerPlugin({ analyzerMode: 'disabled' }),
            new MiniCssExtractPlugin({
                filename: config.output.css
            }),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                path: './'
            }),
            new CleanWebpackPlugin(config.clean),
            new ESLintPlugin({
                extensions: ['ts', 'tsx', 'js']
            })
        ],
        watchOptions: {
            aggregateTimeout: 500,
            poll: 1000
        },
        performance: {
            hints: false
        },
        devServer: {
            compress: true,
            port: 8080,
            host: '0.0.0.0',
            historyApiFallback: true,
            allowedHosts: 'all'
        }
    };

    return webpackConfig;
};

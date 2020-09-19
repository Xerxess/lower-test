const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: "production",
    // 入口
    entry: {
        pageOne: "./src/main.js",
        pageTwo: "./src/main2.js"
    },
    // 输出
    output: {
        path: path.resolve("dist"),
        filename: "js/[name].[hash:8].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpe?g|gif|woff|ttf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './static/[name]-[hash:8].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '/',
                    }
                }, 'css-loader']
            },
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 3,
            maxInitialRequests: 10,
            automaticNameDelimiter: '~',
            automaticNameMaxLength: 30,
            name: true,
            cacheGroups: {
                vendors: {
                    chunks: 'initial',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                async: {
                    maxAsyncRequests: 3,
                    maxInitialRequests: 1,
                    test: /[\\/]node_modules[\\/]/,
                    priority: 100
                },
                'echarts': {
                    name: 'echarts',
                    test: /[\\/]node_modules[\\/]echarts[\\/]/,
                    chunks: 'all',
                    priority: 200
                },
                'element-ui': {
                    name: 'element-ui',
                    test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                    chunks: 'all',
                    priority: 10
                },
                vue: {
                    name: 'vue',
                    test: /[\\/]node_modules[\\/]vue[\\/]/,
                    chunks: 'all',
                    priority: 10
                },
                vuex: {
                    name: 'vue',
                    test: /[\\/]node_modules[\\/]vuex[\\/]/,
                    chunks: 'all',
                    priority: 10
                },
                'vue-router': {
                    name: 'vue',
                    test: /[\\/]node_modules[\\/]vue-router[\\/]/,
                    chunks: 'all',
                    priority: 10
                },
                default: {
                    chunks: 'all',
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[hash:8].css',
            chunkFilename: 'css/[name]-[hash:8].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'index2.html',
            template: 'src/index.html'
        })

    ]
}
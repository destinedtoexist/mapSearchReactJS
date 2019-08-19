const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = (env, argv) => {
    const isDevelopment = argv.mode==='development'

    let config = {
        mode: process.env.REACT_APP_ENV,
        plugins: [],
        node: { fs: 'empty' },
        devtool: isDevelopment ? 'source-map' : ''
    };

    
    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: './src/index.html'
    })

    const miniCssExtractPlugin = new MiniCssExtractPlugin()

    config.plugins = [
        htmlWebpackPlugin,
        miniCssExtractPlugin,
        new Dotenv()
    ]


    config.module = {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }

    return config;
}
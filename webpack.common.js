const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        assets: './js/assets.js',
        main: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },

    devServer: {
        open: true,
        host: 'localhost'
    },

    module: {
        rules:[
            {
                test:/\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.js$/i,
                exclude:/(node_modules | bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },

    plugins:[new HtmlWebpackPlugin({
        template: './index.html'
    })]
}
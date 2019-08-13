var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader', "sass-loader"]},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            {test: /\.(jpg|png|gif|bmg|jpeg)$/, use: 'url-loader'},
            {test: /\.vue$/, use: 'vue-loader'}
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ]
}
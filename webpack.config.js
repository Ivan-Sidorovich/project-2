const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        product: './src/js/script.js',
        cart: './src/js/cart.js',
        checkout: './src/js/nav_form.js',

    },
    output: {
        filename: '[name].build.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            chunks: []
        }), new HTMLWebpackPlugin({
            filename: 'product.html',
            template: './src/product.html',
            chunks: ['product']
        }), new HTMLWebpackPlugin({
            filename: 'single_page.html',
            template: './src/single_page.html',
            chunks: []
        }), new HTMLWebpackPlugin({
            filename: 'cart.html',
            template: './src/cart.html',
            chunks: ['cart']
        }), new HTMLWebpackPlugin({
            filename: 'checkout.html',
            template: './src/checkout.html',
            chunks: ['checkout']
        })

    ],
    devtool: 'source-map'
}
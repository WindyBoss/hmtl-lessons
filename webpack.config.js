const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'project-container'),
        filename: 'my-bundle.js'
    },
    stats: 'errors-only',
    // Problem with DevServer
    devServer: {
        watchFiles: ['src/index.html'],
        static: {
            directory: path.join(__dirname, 'project-container'),
        },
        compress: true,
        port: 9000,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        open: true,
    },
    module: {
        rules: [
        // {
        //     test: /\.html$/i,
        //     loader: "html-loader",
        // },
        {
            test: /\.s[ac]ss$/i,
            use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            MiniCssExtractPlugin.loader,
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
            ],
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
        }
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new MiniCssExtractPlugin(), // -> add CSS to separate file, but not inline inside HTML
        new CleanWebpackPlugin(), // -> clean exit point every time
    ],
};


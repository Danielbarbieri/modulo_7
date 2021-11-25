const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: './src/index.js',
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index.html',
//             minify: false
//         })
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.(sass|css)$/,
//                 use: ['style-loader', 'css-loader', ' sass-loader'],
//             },
//         ],
//     },
// }

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};
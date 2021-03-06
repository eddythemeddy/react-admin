const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require( 'path' );

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        port: 9000
    },
    module: {
        rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
              ],
            },
            {
              test: /\.(png|svg|jpg|gif|ico)$/,
              use: [
                'file-loader',
              ],
            },
            {
                test: /\.js?$/,
                exclude: /node_module/,
                use: 'babel-loader'
            },
            {
                test: /\.css?$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        // new WebpackShellPlugin({
        //     onBuildStart: ['echo "Starting"'],
        //     onBuildEnd: ['mv dist/* ../ghostly/']
        // }),
        new HtmlWebPackPlugin({
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: 'index.html'
        })
    ]
};
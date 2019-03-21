const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|template)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      }
    ],
  },
  plugins: [
    new LodashModuleReplacementPlugin({
      paths: true,
      collections: true,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
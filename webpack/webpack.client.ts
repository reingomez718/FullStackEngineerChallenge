import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackMerge from 'webpack-merge';
import path from 'path';
import baseConfig from './webpack.base';

const webpack = require('webpack');

const aa = new HtmlWebpackPlugin
const config: Configuration = {
  mode: 'development',
  entry: './app/client/client.tsx',
  // Tell webpack where to put output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './app',
    hot: true,
    port: 3001,
    open: true,
    historyApiFallback: true,
    watchContentBase: true,
  },
  devtool: 'inline-source-map'
};

module.exports = webpackMerge(baseConfig, config);

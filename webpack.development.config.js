/* eslint-disable import/no-extraneous-dependencies */

const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.config');


module.exports = merge(commonConfig, {
  devtool: 'eval',
  devServer: {
    port: 9200,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
});

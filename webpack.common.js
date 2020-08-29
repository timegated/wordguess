const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/index.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        user: ['html-loader']
      },
      {
        test: /\.svg|png|jpg|pdf$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            ouputPath: 'images',
          },
        },
      },
    ],
  },
}
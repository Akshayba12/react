const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
  })],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  mode: 'development',
  devServer: {
    // port: '3004',
    open: true,

  },
};

var webpack = require('webpack');

var config = {
  entry: {
    app: './src/index'
  },
  output: {
    filename: '[name].js',
    path: '/build',
    publicPath: 'http://localhost:3000/build'
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel?stage=0'] }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};

module.exports = config;

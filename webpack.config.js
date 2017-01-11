const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'script!jquery/dist/jquery.min.js', 
    './src'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery', // Assigning the $ and jQuery to jquery when bundle
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  resolve: {
    root: './',
    alias: {},
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: './public',
    inline: true
  }
};

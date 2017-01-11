const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    'script!jquery/dist/jquery.min.js', 
    'script!tether/dist/js/tether.min.js', 
    'script!bootstrap/dist/js/bootstrap.min.js', 
    './src'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery', // Assigning the $ and jQuery to jquery when bundle
      'jQuery': 'jquery',
      'Tether': 'tether',
      'window.Tether': 'tether'
    })
  ],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  resolve: {
    root: './',
    modulesDirectories: [
			'node_modules',
			'./src/components'
		],
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
      },
      {
				test: /\.(woff|woff2|eot|ttf|svg)$/, 
        loader: 'url' 
			}
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: './public',
    inline: true
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/bootstrap/scss')
    ]
  }
};

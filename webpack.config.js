var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  inject: 'body'
});

module.exports = {
  context: __dirname + '/src/js',
  entry: './index.js',
  output: {
    filename: 'app.[hash].js',
    path: __dirname + '/dist'
  },
  devServer: {
    inline: true,
    port: 3334
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
			loaders: ['style', 'css', 'sass']
    }, {
    	test: /(\.jpe?g|\.png|\.gif|\.svg)$/,
			loader: 'url?limit=10000!img?progressive=true'
		}]
  },
  plugins: [HTMLWebpackPluginConfig]
};

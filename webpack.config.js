// webpack.config.js
const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
        
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './public',
      hot: true
    }
  
};
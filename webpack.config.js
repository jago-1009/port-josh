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
     new webpack.definePlugin({
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  })
    ],
    devServer: {
      contentBase: './public',
      hot: true
    }
  
};
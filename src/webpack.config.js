// webpack.config.js
const { EnvironmentPlugin } = require('webpack');

module.exports = {
  // ... other configurations
  plugins: [
    new EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
  ]
};
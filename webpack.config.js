const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['lodash']
          }
        },
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin({
      shorthands: true,
      cloning: true,
      caching: true,
    })
  ],
  optimization: {
    minimize: false
  }
};

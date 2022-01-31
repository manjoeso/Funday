const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [{
            loader: 'babel-loader',
              options: {
                presets: ['@babel/env', '@babel/react']
              }
            },
          ]  
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
      ]
  },
  devtool: 'source-map'
};
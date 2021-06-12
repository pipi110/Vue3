const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/index.js',
  watch:true,
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ 'style-loader','css-loader'], // 应保证 loader 的先后顺序：'style-loader' 在前，而 'css-loader' 在后。如果不遵守此约定，webpack 可能会抛出错误。
      },
      {
        test: /\.(png|svg|jpg|jpe?g|gif)$/i,
        type: 'asset/resource',  // webpack4使用file-loader和url-loader
      },
    ],
  },
};
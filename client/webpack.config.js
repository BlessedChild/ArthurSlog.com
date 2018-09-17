const path = require('path');

module.exports = {
  // 入口点：准备进行转换的源代码的路径
  entry: './src/index.js',

  // 输出点：用来存放转换好的文件的路径
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};

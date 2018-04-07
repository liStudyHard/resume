var path = require('path');
var HtmlWepackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: __dirname + '/src/resume/index.js', // 入口文件路径
  output: {
      path: __dirname + '/dist',
      filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // babel 转换为兼容性的 js
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
           presets: ['react', 'latest', 'babel-preset-stage-1'],
          'plugins': [
            ['import', { 'libraryName': 'antd', 'libraryDirectory': 'es', 'style': 'css' }] // `style: true` 会加载 less 文件
          ]
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        loaders: [
        'style-loader', 'css-loader?importLoaders=1',
          {
            loader: 'postcss-loader',
            options: {
            ident: 'postcss',
            plugins: [
              require('autoprefixer')({
                browsers: 'last 20 versions'
              })
            ]
           }
          },
          'less-loader'
        ]
      },
       {
        test: /\.(png|jpg|gif)$/i,
        loader: ['url-loader?limit=12000', 'img-loader']
      }
    ]
  },
  devServer: {
    port: '3333',
    historyApiFallback: true
  },
  plugins: [
    new HtmlWepackPlugin({
      template: __dirname + '/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ]
}
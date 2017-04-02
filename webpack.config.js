const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

const PRODUCTION = process.env.NODE_ENV === 'production'

const extractLess = new ExtractTextPlugin({
  filename: 'style.css',
  disable: PRODUCTION,
  allChunks: true
})

module.exports = {
  entry: './app',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.less$/,
      exclude: [/node_modules/],
      use: extractLess.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'less-loader'
        }],
        fallback: 'style-loader'
      })
    }]
  },
  plugins: [
    new HtmlPlugin({
      template: 'app/index.html'
    }),
    extractLess,
    new UglifyJSPlugin({
      compress: { warnings: !PRODUCTION }
    })
  ]
}

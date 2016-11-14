var webpack = require("webpack")
var path = require("path")// 用来处理路径

module.exports = {
  entry: [
    // for hot loader: WebpackDevServer host and port
    "webpack-dev-server/client?http://localhost:8080",
    // for hot loader: "only" prevents reload on syntax errors
    "webpack/hot/only-dev-server",
    // our app's entry point
    "./src/client/index.js"
  ],
  module: {
    loaders: [
      {
        test:/\.jsx?$/,
        include: path.join(__dirname,'src'),
        loaders: ['babel'],
      }
    ]
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  output: {
    path: __dirname + '/public/build',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/build',
  },
  devServer: {
    contentBase: './public',
    hot: true,
    host: 'localhost',
    proxy: {
      '*': 'http://localhost:' + 3000
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

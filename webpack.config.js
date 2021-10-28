const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  devServer: {
    // 読み込み先のディレクトリを指定
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // 自動的にブラウザに表示するかどうかの設定
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'], //jsファイルとvueファイルの拡張子の省略（'./foo.js'を'./foo'と省略して書けるようになる）
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename:'styles/style.css'
    }),
    new HtmlWebpackPlugin({
      filename: `./index.html`,
      template: `./src/html/index.html`
    })
  ],
}

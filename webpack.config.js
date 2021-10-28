const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  // ソースマップを有効化
  mode:"development",
  devtool: 'inline-source-map',
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
          'sass-loader',
          {
            loader:'postcss-loader',
            options:{
              postcssOptions:{
                plugins:[
                  require('autoprefixer')({
                    grid: true
                  })
                ]
              }
            }
          },
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.ts$/,
        use: [{
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        }]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'], //jsファイルとvueファイルの拡張子の省略（'./foo.js'を'./foo'と省略して書けるようになる）
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

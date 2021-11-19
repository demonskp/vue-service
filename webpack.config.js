const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin, NoEmitOnErrorsPlugin, ProgressPlugin } = require('webpack');
const { envConfig } = require('./config');

module.exports = {
  mode: envConfig.mode,
  entry: ['./client/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:7].js',
    publicPath: envConfig.publicPath,
  },
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /.jsx?$/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]',
          esModule: false,
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '测试项目',
      filename: 'index.html',
      template: path.resolve(__dirname, './client/assets/index.html'),
    }),
    new DefinePlugin({
      ENV_CONFIG: JSON.stringify(envConfig),
    }),
    new NoEmitOnErrorsPlugin(),
    new ProgressPlugin(),
  ],
};

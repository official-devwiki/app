import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'eval',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@libs': path.resolve(__dirname, './src/libs/'),
      '@store': path.resolve(__dirname, './src/store/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },
  devServer: {
    publicPath: '/dist/',
    hot: true,
    compress: true,
    port: 3003,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
    }),
  ],
};

export default config;

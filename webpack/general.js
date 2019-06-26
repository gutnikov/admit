const CircularDependencyPlugin = require('circular-dependency-plugin');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function({ dirs, production, assetHashLength }) {
  const bundleName = `[name].[chunkhash:${assetHashLength}].js`;
  return {
    mode: production ? 'production' : 'development',
    context: dirs.src,
    entry: {
      main: ['./index'],
    },
    output: {
      filename: bundleName,
      chunkFilename: bundleName,
      publicPath: '/',
      crossOriginLoading: 'use-credentials',
      globalObject: '(typeof self !== "undefined" ? self : window)',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
      new CircularDependencyPlugin({
        failOnError: true,
      }),
      new DefinePlugin({
        DEBUG: !production,
      }),
      new HtmlWebpackPlugin({
        template: 'index.ejs',
      }),
    ],
    resolveLoader: {
      extensions: ['.js', '.ts'],
    },
    node: false,
  };
};

module.exports = function({ production }) {
  return {
    optimization: {
      minimize: production,
      runtimeChunk: {
        name: 'manifest',
      },
      splitChunks: {
        minChunks: Infinity,
        cacheGroups: {
          vendors: {
            name: 'vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            enforce: true,
          },
          default: false,
        },
      },
    },
  };
};

/* gloabl __dirname, process */
const path = require('path');
const webpackMerge = require('webpack-merge');
const parts = require('./webpack');

const options = {
  production: process.env.NODE_ENV === 'production',
  dirs: {
    src: path.join(__dirname, 'src'),
  },
  assetHashLength: 10,
};

module.exports = function() {
  return webpackMerge.smart(parts.map(part => part(options)));
};

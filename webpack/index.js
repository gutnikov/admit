const general = require('./general');
const javascript = require('./javascript');
const opt = require('./optimization');
const devServer = require('./dev-server');

module.exports = function({ production }) {
  return production ? [general, javascript, opt] : [general, javascript, opt, devServer];
};

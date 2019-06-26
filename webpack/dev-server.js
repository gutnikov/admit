const path = require('path');

module.exports = function({ dirs }) {
  return {
    devServer: {
      contentBase: path.join(dirs.dist),
      compress: false,
      port: 9000,
    },
  };
};

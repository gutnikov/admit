const { join } = require('path');

module.exports = function(config) {
  return {
    resolve: {
      modules: ['node_modules'],
      alias: {
        ui: join(config.dirs.src, 'ui'),
        store: join(config.dirs.src, 'store'),
        containers: join(config.dirs.src, 'containers'),
        utils: join(config.dirs.src, 'utils'),
      },
    },
    module: {
      rules: [
        {
          test: /(\.jsx?|\.tsx?)$/,
          include: [config.dirs.src],
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                plugins: [
                  // JSX
                  '@babel/plugin-transform-react-jsx',
                  '@babel/plugin-syntax-jsx',
                  //
                  // ES2015:
                  '@babel/plugin-proposal-class-properties',
                  [
                    '@babel/plugin-proposal-object-rest-spread',
                    {
                      useBuiltIns: true,
                    },
                  ],
                  '@babel/plugin-transform-arrow-functions',
                  '@babel/plugin-transform-classes',
                  '@babel/plugin-transform-destructuring',
                  '@babel/plugin-transform-template-literals',
                  '@babel/plugin-transform-object-super',
                  '@babel/plugin-transform-shorthand-properties',
                  '@babel/plugin-transform-computed-properties',
                  '@babel/plugin-transform-parameters',
                  '@babel/plugin-transform-block-scoping',
                  '@babel/plugin-transform-spread',
                  '@babel/plugin-transform-for-of',

                  //
                  '@babel/plugin-syntax-dynamic-import',
                ],
                presets: [
                  [
                    '@babel/preset-typescript',
                    {
                      isTSX: true,
                      allExtensions: true,
                    },
                  ],
                ],
              },
            },
          ],
        },
      ],
    },
  };
};

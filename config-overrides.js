const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@constants': 'src/constants',
    '@containers': 'src/containers',
    '@helpers': 'src/helpers',
    '@hoc-helpers': 'src/hoc-helpers',
    '@hooks': 'src/hooks',
    '@pages': 'src/pages',
    '@services': 'src/services',
    '@utils': 'src/utils',
    '@styles': 'src/styles',
    '@routes': 'src/routes',
    '@store': 'src/store',
    '@assets': 'src/assets',
    '@context': 'src/context',
  })(config);

  return config;
};

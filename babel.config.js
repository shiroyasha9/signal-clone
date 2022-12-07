module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@components': './components',
            '@constants': './constants',
            '@hooks': './hooks',
            '@navigators': './navigators',
            '@screens': './screens',
            '@stores': './stores',
            '@themes': './themes',
            '@types': './types',
            '@utils': './utils',
          },
        },
      ],
    ],
  };
};

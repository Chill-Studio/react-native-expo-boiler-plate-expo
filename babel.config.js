
module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            '@assets/*': './src/assets/*',
            '@pages': './src/pages/index.ts',
            '@components': './src/components/index.ts',
            '@routes': './src/routes/index.ts',
            '@store': './src/store/index.ts',
            '@configs': './src/configs/index.ts',
            '@utils': './src/utils/index.ts',
            '@theme': './src/theme/index.ts',
            '@typings': './src/typings/index.ts'

          },
        },
      ],
    ],
  };
};

const webpack = require('webpack');
const { DateTime } = require('luxon');
const pkg = require('./package.json');

module.exports = {
  runtimeCompiler: true,
  filenameHashing: false,
  productionSourceMap: true,
  lintOnSave: process.env.NODE_ENV !== 'production',
  assetsDir: '',
  outputDir: 'dist',

  publicPath: '/',

  css: {
    extract: {
      filename: 'css/app.css',
    },
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_functions.scss";
          @import "@/scss/_mixins.scss";
        `,
      },
    },
    sourceMap: false,
  },

  configureWebpack: {
    entry: {
      app: './src/main.js',
    },
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_APP_NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      }),
      new webpack.BannerPlugin({
        banner: () =>
          `hash: [hash]\nname: [name]\nversion: ${
            pkg.version
          }\nfile: [file]\ntimestamp: ${DateTime.local()}`,
      }),
    ],
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 200000,
      },
    },
  },

  chainWebpack: (/* config */) => {
    // config.entryPoints.delete('app'); // do not build app.bundle.js
    // config.optimization.delete("splitChunks"); // do not code split
  },

  transpileDependencies: ['vuetify'],
};

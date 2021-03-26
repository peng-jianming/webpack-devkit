const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MANIFEST = 'manifest';
const VENDOR = 'vendor';

module.exports = (production = false) => {
  const myConfigs = require('../../template/page.js');
  return {
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../../template/index.html'),
        inject: false,
        minify: production
          ? {
              removeComments: true,
              collapseWhitespace: true
            }
          : false,
        cache: true,
        configs: myConfigs,
        plugins: {
          assetsRetry: fs.readFileSync(require.resolve('assets-retry')),
          assetsRetryConfig: myConfigs.assetsRetryConfig
        },
        chunks: production ? [MANIFEST, VENDOR, 'main'] : ['main'],
        chunksSortMode: 'manual'
      })
    ]
  };
};

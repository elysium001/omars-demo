// import wp-scripts config
const wpConfig = require('@wordpress/scripts/config/webpack.config');

// use BrowserSyncPlugin to refresh browser in either the editor or the frontend.
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// extend wp-scripts config
module.exports = {
  ...wpConfig,
  entry: {
    'omars-demo-block-edit': './src/demo-block/edit',
    'omars-demo-web-component': './src/demo-block/demo-web-component',
  },
  output: {
    ...wpConfig.output,
    filename: '[name].js',
  },
  plugins: [
    ...wpConfig.plugins,
    new BrowserSyncPlugin({
      host: 'omars-local.vipdev.lndo.site',
      port: 8887,
      proxy: 'http://omars-local.vipdev.lndo.site/', //docker container host
      open: false
    }),
  ]
};

// import wp-scripts config
const wpConfig = require('@wordpress/scripts/config/webpack.config');

// use BrowserSyncPlugin to refresh browser in either the editor or the frontend.
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// extend wp-scripts config
module.exports = {
  ...wpConfig,
  plugins: [
    ...wpConfig.plugins,
    new BrowserSyncPlugin({
      host: 'cool-blog.wp-vip-omar-local.vipdev.lndo.site',
      port: 8887,
      proxy: 'https://cool-blog.wp-vip-omar-local.vipdev.lndo.site/', //docker container host
      open: false
    }),
  ]
};

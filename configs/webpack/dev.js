// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const enableHMR = process.argv && process.argv.indexOf('--disable-hmr') === -1;

const defaultEntryPoints = [
  'webpack-dev-server/client?http://localhost:8080',// bundle the client for webpack-dev-server and connect to the provided endpoint
  './index.tsx' // the entry point of our app
];

const hmrEntryPoints = [
  'react-hot-loader/patch', // activate HMR for React
  'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
];

const defaultPlugins = [
  new CopyWebpackPlugin([
    { from: '../opensource/react/dev', to: 'public' }
  ]),
];

const hmrPlugins = [
  new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
];

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: enableHMR ? defaultEntryPoints.concat(hmrEntryPoints) : defaultEntryPoints,
  devServer: {
    hot: enableHMR, // enable HMR on the server
    proxy: {
      '/api/*': {
        target: 'http://localhost:51085',
        secure: false
      }
    }
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: enableHMR ? defaultPlugins.concat(hmrPlugins) : defaultPlugins,
});

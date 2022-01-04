// production config
const merge = require('webpack-merge');
const { resolve } = require('path');
const variables = require('./buildVariables.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: (chunkData) => {
      return variables.buildNumber + '/js/bundle.min.js';
    },
    path: resolve(__dirname, '../../dist'),
    publicPath: '',
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([
      { from: '../opensource/react/prod', to: 'public' }
    ]),
  ],
});
var webpack = require('karma-webpack');

module.exports = function (config) {
  config.set({

    singleRun: false,
    watched: true,

    frameworks: ['jasmine'],
    browsers: ['Chrome'], 

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'dots' ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader',query:{presets:['es2015', 'react', 'stage-2', 'airbnb']} },
          { test: /\.jsx$/, loader: 'babel-loader',query:{presets:['es2015', 'react', 'stage-2', 'airbnb']} }
        ]
      }
    },

    browserNoActivityTimeout: 300000,

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sinon',
      'karma-sinon-chai',
      'karma-sourcemap-loader',
      'karma-chrome-launcher'
    ],

    webpackServer: {
      noInfo: true
    },


  });
};
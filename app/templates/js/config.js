'use strict';

require.config({
  baseUrl: '/js',
  paths: {
    // requirejs plugins
    'text': '../bower_components/requirejs-text/text',
    'async': '../bower_components/requirejs-plugins/src/async',
    'font': '../bower_components/requirejs-plugins/src/font',
    'goog': '../bower_components/requirejs-plugins/src/goog',
    'image': '../bower_components/requirejs-plugins/src/image',
    'json': '../bower_components/requirejs-plugins/src/json',

    // other requirements
    'jquery': '../bower_components/jquery/jquery',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.js',
    'lodash': '../bower_components/lodash/dist/lodash.min',
    'ko': '../bower_components/knockout.js/knockout',
    'moment': '../bower_components/moment/moment',
    'simrou': '../bower_components/simrou/build/simrou.min',
    'imagesloaded': '../bower_components/imagesloaded/imagesloaded'
  },
  shim: {
    'json': { deps: ['text'] },
    'jquery': { exports: '$' },
    'lodash': { exports: '_' },
    'bootstrap': { deps: ['jquery'] },
    'ko': { deps: ['jquery'], exports: 'ko' },
    'moment': { exports: 'moment' },
    'imagesloaded': { exports: 'imagesLoaded', deps: ['eventEmitter/EventEmitter', 'eventie/eventie'] },
    'simrou': { deps: ['jquery'] }
  }

});

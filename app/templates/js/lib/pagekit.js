'use strict';

require.config({
  paths: {
    'twitter': '//platform.twitter.com/widgets',
    'facebook': '//connect.facebook.net/en_US/all',
    'ga': 'http://www.google-analytics.com/analytics',
    'discometrics': 'http://static.ddmcdn.com/ddm/javascript/apis/1.9.5/all.ugly'
  },
  shim: {
    'twitter': { exports: 'twttr' },
    'facebook': { exports: 'FB' },
    'ga': { exports: 'ga' },
    'discometrics': { exports: 'DDM', deps: ['jquery', 'ga'] }
  }
});

define(function(require) {

  // Stuff you gotta do on every page
  var $ = require('jquery'),
    AdOps = require('lib/adops'),
    Sharing = require('lib/sharing');

  // Set up pagekit Object
  var pagekit = {
    adops: new AdOps(),
    sharing: new Sharing()
  };

  // Return pagekit
  return pagekit;

});

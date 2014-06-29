/* global dataLayer: true */
'use strict';

define(function(require) {

  var _ = require('lodash'),
    ga = require('ga'),
    gaEvents = {},
    gaAccount = 'UA-2061733-16',
    gaDomain = 'whatever.com';

  return (function() {

    // DMs GTM tracker
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !== 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-K5LMK3');

    // agency GA account
    ga('create', gaAccount, gaDomain);

    // send pageview
    ga('send', 'pageview');

    gaEvents = {

      gaTrackPageview: function(opt, callback) {

        var defaults = {
          'page': null,
          'title': null,
          'hitCallback': callback
        }, options;

        options = _.assign(defaults, opt);
        return ga('send', 'pageview', options);
      },

      gaTrackGTM: function(opt) {

        /*
          dataLayer.push({
           'color': 'red',
           'conversionValue': 50,
           'event': 'customizeCar'
          });
        */

        dataLayer.push(opt);
      },

      gaTrackSocial: function(network, type, opt) {
        return ga('send', 'social', network, type, window.location.protocol + '//' + window.location.hostname, opt);
      },

      gaTrackEvent: function(category, action, label, title, opt) {
        return ga('send', 'event', category, action, label, opt);
      },

      gtmVideoEvent: function(metaObj) {
        // dataLayer - Google Tracking Module ( GTM )
        return dataLayer.push({
          'videoTitle': metaObj.title,
          'videoType': metaObj.videoForm || 'shortform', // options: shortform, longform
          'videoShowName': metaObj.showName || '',
          'videoCategory': metaObj.category || '', // BDAT category, if no BDAT, leave it blank
          'videoPlaylistTitle': metaObj.playlistTitle || '', // for single video assets, leave this blank
          'event': metaObj.eType // options: clip-start, clip-complete, ad-start, segment-start, segment-complete
        });
      }

    };

    return gaEvents;

  })();

});

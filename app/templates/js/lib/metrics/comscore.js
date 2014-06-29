'use strict';

define(function(require) {

  return (function() {
    var Comscore;

    Comscore = (function() {
      var Comscore = function() {
        var self = this;
        window._comscore = window._comscore || [];

        // initial page tracking
        window._comscore.push({
          c1: 2,
          c2: '3000036',
          c3: '',
          c4: '',
          c5: '',
          c6: ''
        });

        // comscore src
        (function() {
          var s = document.createElement('script'),
            el = document.getElementsByTagName('script')[0];
          s.async = true;
          s.src = (document.location.protocol === 'https:' ? 'https://sb' : 'http://b') + '.scorecardresearch.com/beacon.js';
          el.parentNode.insertBefore(s, el);
        })();

      };

      /**
       * @description   comscore tracking
       * @param         {object} tag - {c1:1,c2:'6036284',c3:"",c4:"",c5:"",c6:"",c7:"",c15:""}
       */
      Comscore.prototype.sendBeacon = function(tag) {
        COMSCORE.beacon(tag);
      };

      return Comscore;

    })();

    return new Comscore();

  })();

});

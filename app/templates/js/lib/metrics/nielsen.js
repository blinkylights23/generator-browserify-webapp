/* global escape: true */
'use strict';

define(function(require) {

  return (function() {
      var d = new Image(1, 1),
        ci = 'us-201051',
        c6 = 'vc,c03',
        cg = 0,
        cc = 1;
      d.onerror = d.onload = function() {
        d.onerror = d.onload = null;
      };
      d.src = ['//secure-us.imrworldwide.com/cgi-bin/m?ci='+ ci +'&c6='+ c6 +'&cg='+ cg +'&cc='+ cc +'&si=', escape(window.location.href), '&rp=', escape(document.referrer), '&ts=compact&rnd=', (new Date()).getTime()].join('');
    })();

});

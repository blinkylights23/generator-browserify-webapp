'use strict';

define(function(require) {

  var metrics = {};
  metrics.ga = require('lib/metrics/ga-events');
  metrics.comscore = require('lib/metrics/comscore');
  metrics.ddm = require('discometrics');

  return metrics;

});

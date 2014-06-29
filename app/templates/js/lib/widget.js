'use strict';

var Widget = function() {
  this.widgetPurpose = 'work';
};


Widget.prototype.doWork = function(fn) {
  fn(this.widgetPurpose);
};


module.exports = Widget;


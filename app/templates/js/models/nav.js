'use strict';

var ko = require('knockout'),
    moment = require('moment'),
    _ = require('lodash'),
    config = require('../../data/index-config');



var NavModel = function(schedule) {
  this.schedule = schedule;
  this.active = ko.observable();

  var scheduleItems = schedule.data.calendar;
  this.navItems = ko.observableArray(
    _.each(scheduleItems, function(o) {
      o.navDate = moment(o.date).format(config.navDateFormat);
    })
  );

};




module.exports = NavModel;

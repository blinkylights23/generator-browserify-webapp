/* global $: true, Simrou: true, pageMetricsData, viewingEnvironment */
'use strict';

var $ = require('jquery'),
  _ = require('lodash'),
  Simrou = require('simrou'),
  ko = require('knockout'),
  Page = require('./models/page'),
  NavItem = require('./models/nav');

require('bootstrap');

// Config data
var config = require('../data/index-config');

// KO View Model
var ViewModel = function() {
  var self = this;

  // Create some pages
  self.pageList = ko.observableArray();
  self.currentPage = ko.observable();
  self.buildPages = function() {
    _.each(config.pages, function(p) {
      var pg = new PageModel(p);
      self.pageList().push(pg);
    });
  };
  self.buildPages();

  // Routes
  self.defaultRoute = function(event, params) {
    console.log(params);
  };
  self.pageRoute = function(event, params) {
    var navPage = _.find(self.pageList(), function(d) {
      return d.slug === params.slug;
    });
    if (navPage) {
      self.currentPage(navPage);
    } else {
      console.log('404');
    }
  };

};
var view = new ViewModel(clock, schedule);
ko.applyBindings(view);

// Router
var trackPageview = function(event, params) {
};

var router = new Simrou({
  '!/': [view.defaultRoute, trackPageview],
  '!/:slug': [view.pageRoute, trackPageview]
});
router.start('!/');





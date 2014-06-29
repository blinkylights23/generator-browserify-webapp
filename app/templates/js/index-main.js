'use strict';

var requireModules = [
  'lib/pagekit',
  'index-app',
  'json!../data/index-config.json'
];



require(requireModules, function(pagekit, app, config) {

  console.log(app);

});

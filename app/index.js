'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var BrowserifyWebappGenerator = module.exports = function BrowserifyWebappGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(BrowserifyWebappGenerator, yeoman.generators.Base);

BrowserifyWebappGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log('Discovery Static Site Generator');

  var prompts = [];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));

};


BrowserifyWebappGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');
};


BrowserifyWebappGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/css');
  this.mkdir('app/img');
  this.directory('js', 'app/js');
  this.directory('swig', 'app/swig');
  this.directory('styl', 'app/styl');
  this.directory('data', 'app/data');
  this.directory('test', 'app/test');
};


BrowserifyWebappGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.copy('bowerrc', '.bowerrc');
  this.copy('robots.txt', 'app/robots.txt');
};




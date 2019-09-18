'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var scripts = require('./scripts').scripts;
var markups = require('./markups').markups;
var watch = require('./watch').watch;

var karma = require('karma');

var pathSrcHtml = [
  path.join(conf.paths.tmp, '/serve/**/*.html'),
  path.join(conf.paths.src, '/**/*.html')
];

var pathSrcJs = [
  path.join(conf.paths.tmp, '/**/!(*.spec).js')
];

function runTests (singleRun, done) {
  var reporters = ['progress'];
  var preprocessors = {};

  pathSrcHtml.forEach(function(path) {
    preprocessors[path] = ['ng-html2js'];
  });

  if (singleRun) {
    pathSrcJs.forEach(function(path) {
      preprocessors[path] = ['coverage'];
    });
    reporters.push('coverage')
  }

  var localConfig = {
    configFile: path.join(__dirname, '/../karma.conf.js'),
    singleRun: singleRun,
    autoWatch: !singleRun,
    reporters: reporters,
    preprocessors: preprocessors
  };

  var server = new karma.Server(localConfig, function(failCount) {
    done(failCount ? new Error("Failed " + failCount + " tests.") : null);
  })
  return server.start();
}

function test() {
  return runTests(true, done);
}

function testAuto() {
  return runTests(false, done);
}

exports.test = gulp.series(scripts, markups, test);
exports.testAuto = gulp.parallel(watch, testAuto);

exports.testAuto.alias = 'test:auto';

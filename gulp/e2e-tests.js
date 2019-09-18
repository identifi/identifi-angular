'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var server = require('./server');
var serveE2E = server.serveE2E;
var serveE2EDist = server.serveE2EDist;

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

function runProtractor (done) {
  var params = process.argv;
  var args = params.length > 3 ? [params[3], params[4]] : [];

  gulp.src(path.join(conf.paths.e2e, '/**/*.js'))
    .pipe($.protractor.protractor({
      configFile: 'protractor.conf.js',
      args: args
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
      done();
    });
}

// Downloads the selenium webdriver
exports.webdriverUpdate = gulp.series($.protractor.webdriver_update);
exports.webdriverStandalone = gulp.series($.protractor.webdriver_standalone);
exports.protractorSrc = gulp.series(serveE2E, exports.webdriverUpdate, runProtractor);
exports.protractor = exports.protractorSrc;
exports.protractorDist = gulp.series(serveE2EDist, exports.webdriverUpdate, runProtractor);

// Add legacy aliases...
exports.webdriverUpdate.alias = 'webdriver-update';
exports.webdriverStandalone.alias = 'webdriver-standalone';
exports.protractorSrc.alias = 'protractor:src';
exports.protractorDist.alias = 'protractor:dist';

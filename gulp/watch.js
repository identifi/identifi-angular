'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var inject = require('./inject').inject;
var injectReload = require('./inject').injectReload;
var markups = require('./markups').markups;
var scriptsReload = require('./scripts').scriptsReload;
var stylesReload = require('./styles').stylesReload;

var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

function watch() {
  gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], injectReload);

  gulp.watch([
    path.join(conf.paths.src, '/app/**/*.css'),
    path.join(conf.paths.src, '/app/**/*.scss')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start(stylesReload);
    } else {
      gulp.start(injectReload);
    }
  });

  gulp.watch([
    path.join(conf.paths.src, '/app/**/*.js'),
    path.join(conf.paths.src, '/app/**/*.coffee')
  ], gulp.series(function(event) {
    if(isOnlyChange(event)) {
      gulp.start(scriptsReload);
    } else {
      gulp.start(injectReload);
    }
  }));

  gulp.watch(path.join(conf.paths.src, '/app/**/*.hbs'), markups);

  gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), gulp.series(function(event) {
    return browserSync.reload(event.path);
  }));
}

exports.watch = gulp.series(markups, inject, watch);

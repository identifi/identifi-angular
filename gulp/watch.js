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

function bsReload(path, stat){
  return browserSync.reload(path);
}

function watch() {
  gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], injectReload);

  var stylePaths = [
    path.join(conf.paths.src, '/app/**/*.css'),
    path.join(conf.paths.src, '/app/**/*.scss')
  ];
  var scriptPaths = [
    path.join(conf.paths.src, '/app/**/*.js'),
    path.join(conf.paths.src, '/app/**/*.coffee')
  ];
  var htmlPaths = [path.join(conf.paths.src, '/app/**/*.html')];

  gulp.watch(stylePaths.concat(scriptPaths), {events: ['add', 'unlink']}, injectReload);
  gulp.watch(htmlPaths, {events: ['unlink']}, injectReload);

  gulp.watch(stylePaths, {events: 'change'}, stylesReload);
  gulp.watch(scriptPaths, {events: 'change'}, scriptsReload);

  gulp.watch(path.join(conf.paths.src, '/app/**/*.hbs'), markups);

  gulp.watch(htmlPaths).on('change', bsReload);
  gulp.watch(htmlPaths, {events: ['unlink', 'add']}, injectReload);
}

exports.watch = gulp.series(markups, inject, watch);

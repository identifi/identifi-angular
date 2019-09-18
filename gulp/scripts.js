'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

function buildScripts() {
  return gulp.src(path.join(conf.paths.src, '/app/**/*.coffee'))
    .pipe($.sourcemaps.init())
    .pipe($.coffeelint())
    .pipe($.coffeelint.reporter())
    .pipe($.coffee()).on('error', conf.errorHandler('CoffeeScript'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')))
    .pipe($.size())
};

function scriptsReload() {
  return buildScripts()
    .pipe(browserSync.stream());
}

function scripts() {
  return buildScripts();
}

exports.scriptsReload = gulp.series(scriptsReload);
exports.scripts = gulp.series(scripts);

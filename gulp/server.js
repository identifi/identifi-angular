'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var watch = require('./watch').watch;
var inject = require('./inject').inject;
var build = require('./build').build;

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

const IDENTIFI_API_URL = process.env.IDENTIFI_API_URL || 'https://identi.fi';
const IPFS_GATEWAY_URL = process.env.IPFS_GATEWAY_URL || 'https://identi.fi';

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser
  });
}

browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

function serve() {
  return browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src]);
}

function serveDist() {
  return browserSyncInit(conf.paths.dist);
}

function serveE2E() {
  return browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
}

function serveE2EDist() {
  return browserSyncInit(conf.paths.dist, []);
}

exports.serve = gulp.series(build, gulp.parallel(watch, serve));
exports.serveDist = gulp.series(build, serveDist);
exports.serveE2E = gulp.series(inject, serveE2E);
exports.serveE2EDist = gulp.series(build, serveE2EDist);

exports.serveDist.alias = 'serve:dist';
exports.serveE2E.alias = 'serve:e2e';
exports.serveE2EDist.alias = 'serve:e2e-dist';

/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

var gutil = require('gulp-util');
var replace = require('gulp-replace');
var Combine = require('stream-combiner');
var debug = require('gulp-debug');

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};

/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
  exclude: [/\/bootstrap\.js$/, /\/font-awesome\/.*/, /\/bootstrap-sass\/.*\.js/, /\/bootstrap\.css/],
  directory: 'bower_components'
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
exports.errorHandler.exclude = true;

/**
 * URL rewrite rules for CSS transformation
 */
exports.cssRewrites = [
  [/url\("..\/webfonts\//gi, 'url("../fonts/'],
  ['../../../bower_components/bootstrap-sass/assets/fonts/bootstrap/', '../fonts/']
];
exports.jsRewrites = [];
exports.htmlRewrites = [];

// Generic string replacers
function transformer(title, sources) {
  var func = function() {
    return Combine([
      debug({'title': title})
    ].concat(sources.map(function(pattern) {
      return replace(pattern[0], pattern[1])
    })));
  }
  func.exclude = true;
  return func;
}

exports.cssTransforms = transformer('cssTransforms', exports.cssRewrites)
exports.jsTransforms = transformer('jsTransforms', exports.jsRewrites)
exports.htmlTransforms = transformer('htmlTransforms', exports.htmlRewrites)


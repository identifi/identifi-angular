/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

var calls = {}; // All the gulp calls will be collected here

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  // console.debug('Requiring', file)
  var req = require('./gulp/' + file);
  if(req) {
    Object.keys(req).forEach(function(key) {
      var call = req[key];
      // Skip non-function exports, or ones with .exclude attribute set
      if(typeof(call) !== 'function' || typeof(call.exclude) !== 'undefined') {
        return;
      }
      // Add aliases (not masking the original function name)
      if(typeof(call.alias) !== 'undefined') {
        calls[call.alias] = call;
      }
      calls[key] = call;
    });
  }
});

// Register discovered gulp tasks:
Object.keys(calls).forEach(function(key) {
  gulp.task(key, calls[key]);
});

/**
 * Running "yarn gulp --list", will list the available commands
 */
if(process.argv.includes('--list')) {
  console.log('Available gulp commands:');
  Object.keys(calls).forEach(function(key) {
    console.info(' ', key)
  });
  process.exit(0);
}

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
exports.default = gulp.series('clean', 'build')

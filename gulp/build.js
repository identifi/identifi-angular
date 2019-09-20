'use strict';

var path = require('path');
var gulp = require('gulp');

var conf = require('./conf');

var markups = require('./markups').markups;
var inject = require('./inject').inject;

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

function partials() {
  return gulp.src([
    path.join(conf.paths.src, '/app/**/*.html'),
    path.join(conf.paths.tmp, '/serve/app/**/*.html')
  ])
  .pipe($.htmlmin({
    removeEmptyAttributes: true,
    removeAttributeQuotes: true,
    collapseBooleanAttributes: true,
    collapseWhitespace: true
  }))
  .pipe($.angularTemplatecache('templateCacheHtml.js', {
    module: 'irisAngular',
    root: 'app'
  }))
  .pipe(gulp.dest(conf.paths.tmp + '/partials/'));
}

function html() {
  var partialsInjectFile = gulp.src(path.join(conf.paths.tmp, '/partials/templateCacheHtml.js'), { read: false, allowEmpty: true });
  var partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: path.join(conf.paths.tmp, '/partials'),
    addRootSlash: false
  };

  var htmlFilter = $.filter('*.html', { restore: true });
  var jsFilter = $.filter('**/*.js', { restore: true });
  var cssFilter = $.filter('**/*.css', { restore: true });

  return gulp.src(path.join(conf.paths.tmp, '/serve/*.html'))
    .pipe($.inject(partialsInjectFile, partialsInjectOptions))
    .pipe($.useref())
    .pipe(jsFilter)
    .pipe($.sourcemaps.init())
    .pipe($.ngAnnotate())
    .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', conf.errorHandler('Uglify'))
    .pipe($.rev())
    .pipe($.sourcemaps.write('maps'))
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    // .pipe($.sourcemaps.init())
    .pipe($.cssnano())
    .pipe($.rev())
    // .pipe($.sourcemaps.write('maps'))
    .pipe(cssFilter.restore)
    .pipe($.revReplace())
    .pipe(htmlFilter)
    .pipe($.htmlmin({
      removeEmptyAttributes: true,
      removeAttributeQuotes: true,
      collapseBooleanAttributes: true,
      collapseWhitespace: true
    }))
    .pipe(htmlFilter.restore)
    .pipe($.if('*.css', conf.cssTransforms()))
    .pipe($.if('*.html', conf.htmlTransforms()))
    .pipe($.if('*.js', conf.jsTransforms()))
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    .pipe($.size({ title: path.join(conf.paths.dist, '/'), showFiles: true }));
//    .pipe(conf.cssTransforms())
}

// Only applies for fonts from bower dependencies
// Custom fonts are handled by the "other" task
function fonts() {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,otf,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
}

function other() {
  var fileFilter = $.filter(function (file) {
    return file.stat.isFile();
  });

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join('!' + conf.paths.src, '/**/*.{html,css,scss,coffee,hbs}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
}

function clean() {
  return $.del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]);
}

exports.partials = gulp.series(markups, partials);
exports.html = gulp.series(inject, partials, html);
exports.fonts = gulp.series(fonts);
exports.other = gulp.series(other);
exports.clean = gulp.series(clean);
exports.build = gulp.series(gulp.parallel(exports.html, fonts), other);

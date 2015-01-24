var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var to5ify = require('6to5ify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
  dest: 'dist/'
};

function handleError (err) {
  console.error(err)
  gutil.beep();
  this.emit('end');
}

function compileScripts(watch) {
  gutil.log('Starting browserify');

  var entryFile = './src/app.js';
  var browserifyOpts = {debug: true, entries: entryFile, cache: {}};

  var bundler;
  if (watch) {
    bundler = watchify(browserify(browserifyOpts));
  } else {
    bundler = browserify(browserifyOpts);
  }

  bundler.transform(reactify);
  bundler.transform(to5ify);

  var rebundle = function () {
    return bundler.bundle()
      .on('error', handleError)
      .pipe(source(entryFile))
      .pipe(rename('app.js'))
      .pipe(gulp.dest(paths.dest));
  }

  bundler.on('update', rebundle);
  return rebundle();
}

gulp.task('scripts', function () {
  compileScripts(false);
});

gulp.task('styles', function () {
  return gulp.src('src/style.less')
    .pipe(less())
    .on('error', handleError)
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.dest));
});

gulp.task('statics', function () {
  return gulp.src('public/**/*')
    .pipe(gulp.dest(paths.dest));
});

gulp.task('default', ['statics', 'styles'], function () {
  compileScripts(true);
  gulp.watch('src/**/*.less', ['styles']);
  gulp.watch('public/**/*', ['statics']);
});

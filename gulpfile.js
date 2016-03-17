'use strict';

var browserify = require('browserify');
var source = require('vinyl-source-stream');

var gulp = require('gulp');
//var eslint = require('gulp-eslint');
var jasmine = require('gulp-jasmine');
var sass = require('gulp-sass');
var karma = require('karma').Server;

gulp.task('browserify', function() {
  return browserify('./client/app/UHU.js')
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./client/app'));
});

gulp.task('eslint', function() {
  return gulp.src(['**/*.js','!node_modules/**', '!app/js/angular.min.js', '!spec/**'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

gulp.task('sass', function () {
    return gulp.src('./client/style/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./client/style/'));
});

gulp.task('test', ['browserify'], function () {
  return gulp.src('spec/*.js')
    .pipe(jasmine());
});

gulp.task('karma', ['browserify'], function(done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function() {
        done();
    });
});

gulp.task('watch', function() {
  //gulp.watch('./*.js', ['eslint']);
  gulp.watch('./*.js', ['test']);
  gulp.watch('./*.sass', ['sass']);
  gulp.watch(['**/*.js', '!client/app/bundle.js'], ['browserify']);
});

gulp.task('ci', ['sass', 'browserify', 'karma', 'test']);

gulp.task('default', ['watch']);

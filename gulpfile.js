'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');

gulp.task('jshint', function() {
  gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test', function() {
  gulp.src('test.js')
  .pipe(jasmine());
});

gulp.task('watch', function() {
  gulp.watch('./*.js', ['jshint']);
  gulp.watch('./*.js', ['test']);
});

gulp.task('ci', ['test', 'jshint']);

gulp.task('default', ['watch']);
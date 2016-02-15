'use strict';

var gulp = require('gulp');
var jshint = require('gulp-eslint');
var jasmine = require('gulp-jasmine');

gulp.task('eslint', function() {
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
  gulp.watch('./*.js', ['eslint']);
  gulp.watch('./*.js', ['test']);
});

gulp.task('ci', ['test', 'eslint']);

gulp.task('default', ['watch']);
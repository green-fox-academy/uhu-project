'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');
var sass = require('gulp-sass');

gulp.task('jshint', function() {
  gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('sass', function () {
    return gulp.src('./style/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./style/'));
});

gulp.task('test', function() {
  gulp.src('test.js')
  .pipe(jasmine());
});

gulp.task('watch', function() {
  gulp.watch('./*.js', ['jshint']);
  gulp.watch('./*.js', ['test']);
    gulp.watch('./*.sass', ['sass']);
});

gulp.task('ci', ['test', 'jshint', 'sass']);

gulp.task('default', ['watch']);
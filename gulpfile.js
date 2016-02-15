'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var jasmine = require('gulp-jasmine');
var sass = require('gulp-sass');

gulp.task('eslint', function() {
  gulp.src('./*.js')
    .pipe(eslint())
    .pipe(eslint.reporter('default'))
    .pipe(eslint.reporter('fail'));
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
  gulp.watch('./*.js', ['eslint']);
  gulp.watch('./*.js', ['test']);
  gulp.watch('./*.sass', ['sass']);
});

gulp.task('ci', ['test', 'eslint', 'sass']);

gulp.task('default', ['watch']);
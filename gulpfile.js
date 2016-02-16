'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var jasmine = require('gulp-jasmine');
var sass = require('gulp-sass');


gulp.task('eslint', function() {
  return gulp.src(['**/*.js','!node_modules/**', '!app/js/angular.min.js', '!spec/**'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

gulp.task('sass', function () {
    return gulp.src('./views/style/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./views/style/'));
});

gulp.task('test', function () {
  return gulp.src('spec/*.js')
    .pipe(jasmine());
});

gulp.task('watch', function() {
  gulp.watch('./*.js', ['eslint']);
  gulp.watch('./*.js', ['test']);
  gulp.watch('./*.sass', ['sass']);
});

gulp.task('ci', ['test', 'eslint', 'sass']);

gulp.task('default', ['watch']);

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

gulp.task('eslint', function() {
  return gulp.src('').pipe(eslint({
    'rules':{
        'quotes': [1, 'single'],
        'semi': [1, 'always']
    }
  }))
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});

gulp.task('sass', function () {
    return gulp.src('./views/style/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./views/style/'));
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

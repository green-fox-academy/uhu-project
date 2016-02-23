'use strict';

var browserify = require('gulp-browserify');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var jasmine = require('gulp-jasmine');
var sass = require('gulp-sass');
var Server = require('karma').Server;


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

gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('watch', function() {
  gulp.watch('./*.js', ['eslint']);
  gulp.watch('./*.js', ['test']);
  gulp.watch('./*.sass', ['sass']);
  gulp.watch('./*.js', ['bundle']);
});

gulp.task('ci', ['karma', 'test', 'sass', 'bundle']);

gulp.task('default', ['watch']);

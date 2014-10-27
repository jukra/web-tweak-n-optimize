var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  minifyHTML = require('gulp-minify-html'),
  nodeunit = require('gulp-nodeunit'),
  eslint = require('gulp-eslint'),
  wait = require('gulp-wait');

gulp.task('default', ['minify-css', 'minify-js', 'minify-html'], function() {
  console.log("Minified JS, CSS and HTML in static folder");
});

gulp.task('minify-css', function() {
  gulp.src('./static/css/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('minify-js', function() {
  gulp.src('./static/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('minify-html', function() {
  var opts = {comments:false,spare:false};
  gulp.src('./static/html/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('test', ['lint', 'minify-css', 'minify-js', 'minify-html'], function () {
  gulp.src('test/*.js')
        .pipe(wait(1500))
        .pipe(nodeunit({
            reporter: 'junit',
            reporterOptions: {
                output: 'test'
            }
        }));
});

gulp.task('lint', function () {
  gulp.src(['app.js'])
    .pipe(eslint({
        rules:{
            'quotes': 0,
            'strict': 0,
            'no-unused-vars': 0
        },
        env:{
            node:true
        }
    }))
    .pipe(eslint.format());
});

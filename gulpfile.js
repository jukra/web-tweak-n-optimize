var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  minifyHTML = require('gulp-minify-html'),
  nodeunit = require('gulp-nodeunit'),
  eslint = require('gulp-eslint');

gulp.task('default', function() {
  console.log("Minifying JS, CSS and HTML in static folder");
  gulp.src('./static/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
  gulp.src('./static/css/*.css')
      .pipe(minifyCSS({keepBreaks:true}))
      .pipe(gulp.dest('./dist/'));
  var opts = {comments:false,spare:false};
  gulp.src('./static/html/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'));
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

gulp.task('test', function () {
  console.log("Linting app.js");
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
  console.log("Minifying JS, CSS and HTML in static folder");
  gulp.src('./static/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
  gulp.src('./static/css/*.css')
      .pipe(minifyCSS({keepBreaks:true}))
      .pipe(gulp.dest('./dist/'));
  var opts = {comments:false,spare:false};
  gulp.src('./static/html/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'));
  gulp.src('test/*.js')
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

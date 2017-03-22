// Gulp
var gulp = require('gulp');

// Tools
/*
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
*/

// THIS FILE NEEDS REWORKING TO ACCOMMODATE WEBPACK INSTEAD OF BROWSERIFY


// Gulp plugins
//var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var stripDebug = require('gulp-strip-debug');
var todo = require('gulp-todo');
var sass = require('gulp-ruby-sass');
var cache = require('gulp-cache');

// GULP TASKS //

// Compile and minify SCSS to CSS
gulp.task('compileCSS', function() {
    return sass('app/scss/styles.scss', {style: 'compressed'})
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/css'));
});

// Process JS for development / testing 
gulp.task('devJS', function() {
    
    gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(rename("concat.js"))
        .pipe(gulp.dest('app/js/concat'));
    
    browserify({
        entries: 'app/js/concat/concat.js',
        debug: true
      })
      .bundle()
      .pipe(source('script.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('public/js'));
});

// Concatenate and minify JS  
gulp.task('cleanJS', function() {
    
    gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(rename("concat.js"))
        .pipe(gulp.dest('app/js/concat'));
    
    browserify({
        entries: 'app/js/concat/concat.js',
        debug: true
    })  
        .bundle()
        .pipe(source('script.min.js'))
        .pipe(buffer())
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

// generate todo.md from JS files 
gulp.task('generateToDoList', function() {
    gulp.src('app/js/*.js')
        .pipe(todo())
        .pipe(gulp.dest('app/'));
});

// Copy dev images to public location 
// (usually some kind of compression would take place here)
gulp.task('copyImages', function() {
    gulp.src('app/img/*.*')
    .pipe(gulp.dest('public/img/'));
});

// Copy index file and other HTML files to public location 
gulp.task('copyFiles', function() {
    gulp.src('app/*.html')
    .pipe(gulp.dest('public/'));  
});

// Watch files for changes
gulp.task('watchFiles', function() {
  gulp.watch('app/js/*.js', ['devJS', 'generateToDoList']);
  gulp.watch('app/scss/*.scss', ['compileCSS']); 
  gulp.watch('app/img/*.*', ['copyImages']);
  gulp.watch('app/*.html', ['copyFiles']);
});

// Gulp Tasks  
gulp.task('default', ['devJS', 'compileCSS', 'generateToDoList', 'copyFiles', 'watchFiles']);
gulp.task('publish', ['cleanJS', 'compileCSS', 'copyImages', 'copyFiles']);
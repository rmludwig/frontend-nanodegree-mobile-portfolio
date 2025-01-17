// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Lint Task VIEWS
gulp.task('lintView', function() {
    return gulp.src('views/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Concatenate & Minify JS for VIEWS
gulp.task('scriptsView', function() {
    return gulp.src('views/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('views/dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('views/dist'));
});

// Minify the VIEW css using add on module
gulp.task('cssStyleView', function () {
    gulp.src('views/css/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('views/dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('views/css/style.css', ['cssStyleView']);
    gulp.watch('views/js/*.js', ['lintView', 'scriptsView']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'lintView', 'sass', 'scripts', 'scriptsView', 'cssStyleView', 'watch']);


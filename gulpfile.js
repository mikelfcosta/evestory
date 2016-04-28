var gulp = require('gulp');

// Define base folders
var src = 'public/src/';
var dest = 'public/build/';
var bower = 'bower_components/';

// Include plugins
var concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
    cssmin = require("gulp-clean-css"),
    uglify = require('gulp-uglify'),
    wrap = require("gulp-wrap"),
    autoprefixer = require('gulp-autoprefixer');


// Compile Main JS
gulp.task('main', function () {
    console.log('Compiling the Main System.');
    return gulp.src(src + 'app/**/*.js')
        //.pipe(uglify())
        .pipe(wrap('(function(){\n"use strict";\n<%= contents %>\n})();'))
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dest + 'js'));
});

// Compile Vendor JS
gulp.task('vendor', function () {
    console.log('Compiling the Vendor Dependencies.');
    return gulp.src([
        // jQuery
        // bower + 'jquery/dist/jquery.js',
        // Moment JS
        bower + 'moment/moment.js',
        bower + 'moment/locale/pt-br.js',
        // Angular JS
        bower + 'angular/angular.js',
        bower + 'angular-animate/angular-animate.js',
        bower + 'angular-resource/angular-resource.js',
        bower + 'angular-cookies/angular-cookies.js',
        bower + 'angular-sanitize/angular-sanitize.js',
        bower + 'angular-ui-router/release/angular-ui-router.js',
        bower + 'angular-loading-bar/build/loading-bar.js',
        bower + 'angular-bootstrap/ui-bootstrap.js',
        // Angular Localization
        bower + 'angular/angular-locale_pt-br.js'

    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(dest + 'js'));
});

// Compile CSS from Scss files
gulp.task('scss', function () {
    console.log('Compiling the project CSS');
    return sass(src + 'scss/**/*.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest(dest + 'css'));
});

gulp.task('watch', function () {
    // Watch Bloo Files
    gulp.watch(src + '**/*.js', ['main']);
    // Watch .scss files
    gulp.watch(src + 'scss/**/*.scss', ['scss']);
});

// Default Task
gulp.task('default', [
    'main',
    'vendor',
    'scss',
    'watch'
]);
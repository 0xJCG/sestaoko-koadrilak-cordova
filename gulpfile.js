var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['bower_components/ionic/release/js/ionic.bundle.js', 'bower_components/ngmap/build/scripts/ng-map.js', 'bower_components/ion-floating-menu/dist/ion-floating-menu.js', 'bower_components/pdfjs-dist/build/pdf.combined.js', 'bower_components/angular-pdf/dist/angular-pdf.js'])
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('www/lib/js'));
});

// Concatenate & Minify CSS
gulp.task('stylesheets', function() {
    return gulp.src(['bower_components/ionic/release/css/ionic.min.css', 'bower_components/ion-floating-menu/dist/ion-floating-menu.css'])
        .pipe(concat('main.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglifycss())
        .pipe(gulp.dest('www/lib/css'));
});

// Default Task
gulp.task('default', ['scripts', 'stylesheets']);

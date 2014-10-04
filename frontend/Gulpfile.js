var gulp 		= require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');
var minifyCSS 	= require('gulp-minify-css');
var rename 		= require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass({sourcemap: true}))
        .pipe(gulp.dest('css/uncompressed'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCSS())
    	.pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch(["scss/*.scss", "scss/**/*.scss"], ['sass', browserSync.reload]);
    gulp.watch(["js/*.js", "js/**/*.js"], browserSync.reload);
    gulp.watch("**/*.html", browserSync.reload);
});
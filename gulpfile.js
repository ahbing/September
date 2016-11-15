var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("./styles/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./*.css").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return sass('./september.scss')
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['serve']);


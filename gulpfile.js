var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),

gulp.task('sass', function () {
return sass('process/sass/style.scss', {
  sourcemap: true,
  style: 'compressed'
})
.on('error', function (err) {
    console.error('Error!', err.message);
})
.pipe(sourcemaps.write())
.pipe(gulp.dest('styles/css'));
});

gulp.task('default', ['sass']);

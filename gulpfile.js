var gulp = require('gulp');

gulp.task('postcss', require('./tasks/postcss'));

gulp.task('connect', require('./tasks/connect'));

gulp.task('watch', function() {
  gulp.watch('./src/styles/*.css', ['postcss']);
});

gulp.task('default', ['watch', 'connect', 'postcss']);

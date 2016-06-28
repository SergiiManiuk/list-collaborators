var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');

module.exports = function() {
  return gulp.src([
      './src/styles/*.css'
    ])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        console.log('===========');
        console.log('ERROR CSS');
        console.log('===========');
        this.emit('end');
      }}))
    .pipe(postcss([
      require('postcss-simple-vars'),
      require('postcss-nested'),
    ]))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(connect.reload({stream: true}));
};

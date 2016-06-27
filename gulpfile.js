// ================
// Required plugins
// ================

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    postcss = require('gulp-postcss'),
    inlineCSS = require('gulp-inline-css'),
    inlineSource = require('gulp-inline-source'),
    prettify = require('gulp-prettify'),
    html2txt = require('gulp-html2txt'),
    rename = require('gulp-rename'),
    webserver = require('gulp-webserver'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');

// ================
// Jade
// ================

//  gulp.task('jade', ['postcss'], function() {

//   return gulp.src('templates/**/pages/**/*.jade')
//     .pipe(jade({
//       pretty: true
//     }))
//     .pipe(inlineSource())
//     .pipe(inlineCSS({
//       removeStyleTags: false
//     }))
//     .pipe(prettify({
//       indent_size: 2
//     }))
//     .pipe(gulp.dest('./templates'))
//     .pipe(html2txt({
//       ignoreImage: true,
//       wordwrap: 75
//     }))
//     .pipe(gulp.dest('./templates'));

// });


// ================
// Postcss
// ================

gulp.task('postcss', function() {

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
    //.pipe(concat('style.css'))
    // .pipe(rename({
    //   suffix: '-ready'
    // }))
    .pipe(gulp.dest('./dist/styles'))
    .pipe(connect.reload({stream: true}));

});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

// ================
// Create Watch Task
// ================

gulp.task('watch', function() {
  //gulp.watch('templates/**/pages/**/*.jade', ['jade']);
  gulp.watch('./src/styles/*.css', ['postcss']);
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

// ================
// Default 'gulp' task
// ================

gulp.task('default', ['watch', 'connect', 'postcss']);
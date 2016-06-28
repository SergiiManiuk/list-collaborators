var connect = require('gulp-connect');
module.exports = function() {
  connect.server({
  	root: './',
    livereload: true,
  });
}
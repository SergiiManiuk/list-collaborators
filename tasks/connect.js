var connect = require('gulp-connect');
module.exports = function() {
  connect.server({
    livereload: true,
    root: './'
  });
}

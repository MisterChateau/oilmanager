var gulp = require('gulp')
  , connect = require('gulp-connect')
  , paths;

gulp.task('connect', function () {
  connect.server({
    root: [__dirname + '/'],
    port: 9000,
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(paths.js, ['lint']);
  gulp.watch(['./index.html', './css/*.css', './js/*.js'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
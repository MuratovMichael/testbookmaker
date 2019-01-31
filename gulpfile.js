var gulp = require('gulp');
var less = require('gulp-less');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();

gulp.task('less', function() {
  return gulp.src('app/less/**/*.less')
  .pipe(less())
  .pipe(postcss([
    autoprefixer()
  ]))
  .pipe(gulp.dest('app/css'))
  .pipe(server.reload({stream: true}));
});

gulp.task('server', function() {
  server.init({
    server: 'app/'
  });

  gulp.watch('app/less/**/*.less', gulp.series('less'));
  gulp.watch('app/*.html').on('change', server.reload);
});

gulp.task('start', gulp.series('less', 'server'));

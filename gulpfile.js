const gulp = require('gulp');
const browserSync = require('browser-sync');
const minify = require('gulp-babel-minify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'src',
    },
    notify: false,
    ghostMode: {
      scroll: false,
    },
  });
});
gulp.task('browser-sync-test', function() {
  browserSync({
    server: {
      baseDir: 'dist',
    },
    notify: false,
    ghostMode: {
      scroll: false,
    },
  });
});

gulp.task('minify-css', () => {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    // .pipe(rename({
    //   suffix: '.min',
    // }))
    .pipe(gulp.dest('./dist/css/'));
});


gulp.task('minify-js', () => {
  gulp.src('./src/js/script.js')
    .pipe(minify({
      mangle: {
        keepClassName: true,
      },
    }))
    // .pipe(rename({
    //   suffix: '.min',
    // }))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('minify-html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});


gulp.task('watch', function() {
  gulp.watch('src/**/*.html', browserSync.reload);
  gulp.watch('src/css/**/*.css', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
  gulp.watch('src/**/*.php').on('change', browserSync.reload);
});

gulp.task('build-images', function() {
  gulp.src(['src/img/**/*.{gif,jpg,png,svg}'])
    .pipe(gulp.dest('dist/img'));
});

gulp.task('build', [
  'minify-js',
  'minify-css',
  'minify-html',
  'build-images',
]);


gulp.task('test', [
  'build',
  'browser-sync-test',
]);

gulp.task('default', ['browser-sync', 'watch']);

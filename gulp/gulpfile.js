import gulp from 'gulp';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.js';
import { deleteAsync } from 'del';

gulp.task('webpack', function () {
  return gulp
    .src('./src/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-html', function () {
  return gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

gulp.task('copy-styles', function () {
  return gulp.src('src/*.css').pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/*.js', gulp.series('webpack'));
  gulp.watch('src/*.html', gulp.series('copy-html'));
  gulp.watch('src/*.css', gulp.series('copy-styles'));
});

gulp.task('clean', function () {
  return deleteAsync(['dist']);
});

gulp.task(
  'default',
  gulp.series('clean', 'webpack', 'copy-html', 'copy-styles', 'watch')
);

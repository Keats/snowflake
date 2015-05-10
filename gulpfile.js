var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

var sassFiles = [
  './*.scss',
  './base/*.scss',
  './components/*.scss'
];


gulp.task('sass', function() {
  return gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', function() {
  browserSync({
    open: false,
    server: "./"
  });

  gulp.watch(sassFiles, gulp.series('sass'));
});

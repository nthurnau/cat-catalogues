var
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  concat = require('gulp-concat'),
  browserSync = require('browser-sync'),
  uglify = require('gulp-uglify'),
  uglifycss = require('gulp-uglifycss'),
  nodemon = require('gulp-nodemon'),
  sass = require('gulp-sass')


gulp.task('sass', function(){
  return gulp.src('app/public-dev/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/public-dev/css'))
})

gulp.task('minify-css', function(){
	gulp.src('app/public-dev/css/*.css')
		.pipe(concat('application.min.css'))
		.pipe(uglifycss())
		.pipe(gulp.dest('app/public/css'))
		.pipe(browserSync.stream())
})

gulp.task('minify-js', function(){
  gulp.scr('app/public-dev/js/*.js')
    .pipe(concat('application.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/public/js'))
})

gulp.task('browser-sync', ['nodemon'], function(){
	browserSync.init(null, {
		proxy: 'http://localhost:3000',
		files: ['app/public-dev/**/*.*'],
		port: 7000
	})
})

gulp.task('nodemon', function(){
  nodemon({
    ext: 'js html css',
    env: {'NODE_ENV': 'development'}
  })
})

gulp.watch('app/public-dev/css/*.css', ['minify-css'])
gulp.watch('app/public-dev/js/*.js', ['minify-js'])

gulp.task('default', ['browser-sync'])

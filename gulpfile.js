var
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  concat = require('gulp-concat'),
  browserSync = require('browser-sync'),
  // uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  nodemon = require('gulp-nodemon'),
  sass = require('gulp-sass'),
  ghtmlSrc = require('gulp-html-src')


gulp.task('sass', function(){
  return gulp.src('app/public-dev/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/public-dev/css'))
})

gulp.task('minify-css', function() {
  return gulp.src('app/public-dev/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('app/public/css'))
    .pipe(browserSync.stream())
});

gulp.task('copy-css', function() {
	gulp.src('./src/*.html')
		.pipe(ghtmlSrc({ presets: 'css'}))
		.pipe(gulp.dest('./build/'));
});

// gulp.task('minify-css', function(){
// 	gulp.src('app/public-dev/css/*.css')
// 		.pipe(cleanCSS())
// 		.pipe(gulp.dest('app/public/css'))
// 		.pipe(browserSync.stream())
// })

// gulp.task('minify-js', function(){
//   gulp.scr('app/public-dev/js/*.js')
//     .pipe(concat('application.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('app/public/js'))
// })

gulp.task('browser-sync', ['nodemon'], function(){
	browserSync.init(null, {
		proxy: 'http://localhost:3000',
		files: ['app/public/**/*.*'],
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

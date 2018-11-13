var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var path = {
	SCSS_SOURCE: './scss/**/*.scss',
	SCSS_DESTINATION: './css'
}

gulp.task('scss', function () {
	gulp.src( path.SCSS_SOURCE )
	.pipe($.sourcemaps.init())
	.pipe($.sass())
	.pipe($.autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
	.pipe($.size({ showFiles: true }))
	.pipe($.csso())
	.pipe($.size({ showFiles: true }))
	.pipe($.sourcemaps.write('map'))
	.pipe(gulp.dest( path.SCSS_DESTINATION ));
});

gulp.task('update', function() {
	gulp.watch(path.SCSS_SOURCE, ['scss']);
});

gulp.task('default', ['scss', 'update']);
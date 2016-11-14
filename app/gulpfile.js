var typescript = require('gulp-tsc');
var gulp = require('gulp');
var less = require('gulp-less');
var webserver = require('gulp-webserver');
var browserSync = require('browser-sync');  

gulp.task('less', function () {  
    gulp.src(['app/less/*.less','!app/less/extend/{reset,test}.less'])  
        .pipe(less())  
        .pipe(gulp.dest('dist/css'))
});  

gulp.task('compile', function () {
	return gulp.src(['./app/**/*.ts'])
	.pipe(typescript(
	{
		"target": "es5",
		"module": "commonjs",
		"moduleResolution": "node",
		"sourceMap": true,
		"emitDecoratorMetadata": true,
		"experimentalDecorators": true,
		"removeComments": false,
		"noImplicitAny": false
	}
	))
	.pipe(gulp.dest('./dist/'))
});


gulp.task('default', ['compile']);
 
gulp.task('serve', ['compile'], function() {

    browserSync.init({   
        server: "./"  
    });
	
	gulp.watch("./app/**/*.*", ['compile']); 
	gulp.watch("./dist/**/*.*").on('change', browserSync.reload);  
});
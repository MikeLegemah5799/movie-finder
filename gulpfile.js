var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

//set up gulp tasks
gulp.task('browserify', function() {  
    browserify('./src/js/main.js')
        .transform('reactify')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'));
});

//copy tasks

gulp.task('copy', function () {  
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/js/vendors/*.*')
        .pipe(gulp.dest('dist/js'));  

});

//Default tasks 

gulp.task('default', ['browserify', 'copy'], function(){  
    return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});
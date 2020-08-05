var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');
 
gulp.task('tinypng', function (done) {
    gulp.src('img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'GBqfsSqt2VyXlV8PbQ15wX4p5kGCHtsQ',
        }))
        .pipe(gulp.dest('images'));
        done();
});
var gulp        = require('gulp'),
    plugins     = require("gulp-load-plugins")({
                        pattern: ['gulp-*', 'gulp.*'],
                        replaceString: /\bgulp[\-.]/
                    }),
    browserSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(plugins.sass({
            outputStyle: 'development'
        }).on('error', plugins.sass.logError))
        .pipe(gulp.dest('build/css/'));
});

gulp.task('watch', function() {
    gulp.watch('src/jade/*.jade', ['jade']);
    gulp.watch('src/js/*.js', ['jshint','js']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('jade', function () {
    return gulp.src('src/jade/*.jade')
        .pipe(plugins.jade({
            pretty: true
        }))
        .pipe(gulp.dest('build/html/'))
});

gulp.task('js', function () {
     return gulp.src('src/js/*.js')
        .pipe(plugins.uglify())
        .pipe(gulp.dest('build/js/'))
});

gulp.task('jshint', function() {
    gulp.src('src/js/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'));
});

gulp.task('browser-sync', function () {
    var files = [
        'build/html/**/*.html',
        'build/css/**/*.css',
        'build/js/**/*.js'
    ];

    browserSync.init(files, {
        server: {
            baseDir: 'build/',
            index: "html/popup.html"
        }
    });
});


gulp.task('default', ['jade','js','sass','browser-sync','watch']);
gulp.task('distro', ['jade','js','sass']);

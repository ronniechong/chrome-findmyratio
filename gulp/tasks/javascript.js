module.exports = function(gulp, plugins, config) {
    gulp.task(config.javascript.name, function () {
        return gulp.src(config.javascript.src)
            .pipe(plugins.uglify())
            .pipe(gulp.dest(config.javascript.dest))
    });
};
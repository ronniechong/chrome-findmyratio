module.exports = function(gulp, plugins, config) {
    gulp.task(config.sass.name, function() {
        return gulp.src(config.sass.src)
            .pipe(plugins.sass({
                outputStyle: config.sass.options.outputstyle
            }).on('error', plugins.sass.logError))
            .pipe(gulp.dest(config.sass.dest));
    });
};
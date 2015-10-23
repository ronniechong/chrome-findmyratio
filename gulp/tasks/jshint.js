module.exports = function(gulp, plugins, config) {
    gulp.task(config.jshint.name, function() {
        gulp.src(config.jshint.src)
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('default'));
    });
};
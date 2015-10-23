module.exports = function(gulp, plugins, config) {
    gulp.task(config.jade.name, function () {
        return gulp.src(config.jade.src)
            .pipe(plugins.jade({
                pretty: config.jade.options.pretty
            }))
            .pipe(gulp.dest(config.jade.dest))
    });
};

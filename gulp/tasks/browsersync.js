module.exports = function(gulp, browserSync, config) {
    gulp.task(config.browsersync.name, function () {
        var files = config.browsersync.options.files;

        browserSync.init(files, {
            server: {
                baseDir: config.browsersync.options.baseDir,
                index: config.browsersync.options.index
            }
        });
    });
};
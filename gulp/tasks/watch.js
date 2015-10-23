module.exports = function(gulp, plugins, config) {
    gulp.task(config.watch.name, function() {
        gulp.watch(config.jade.src, [config.jade.name]);
        gulp.watch(config.javascript.src, [config.jshint.name, config.javascript.name]);
        gulp.watch(config.sass.src, [config.sass.name]);
    });
};

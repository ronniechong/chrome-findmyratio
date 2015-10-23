var gulp        = require('gulp'),
    plugins     = require("gulp-load-plugins")({
                        pattern: ['gulp-*', 'gulp.*'],
                        replaceString: /\bgulp[\-.]/
                    }),
    browserSync = require('browser-sync'),
    config      = require('./gulp/config');

require(config.param.taskPath + config.sass.name)(gulp, plugins, config);
require(config.param.taskPath + config.jade.name)(gulp, plugins, config);
require(config.param.taskPath + config.javascript.name)(gulp, plugins, config);
require(config.param.taskPath + config.jshint.name)(gulp, plugins, config);
require(config.param.taskPath + config.watch.name)(gulp, plugins, config);
require(config.param.taskPath + config.browsersync.name)(gulp, browserSync, config);

gulp.task('default', [
    config.jade.name,
    config.javascript.name,
    config.sass.name,
    config.browsersync.name,
    config.watch.name
]);

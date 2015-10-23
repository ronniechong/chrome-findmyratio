var build    = "./build",
    src     = './src';

module.exports = {
    param:{
        taskPath    : './gulp/tasks/'
    },
    sass:{
        name        : 'sass',
        src         : [src + '/scss/**/*.scss'],
        dest        : build + '/css/',
        options     : {
            outputstyle : 'development'
        }

    },
    jade:{
        name        : 'jade',
        src         : [src + '/jade/**/*.jade'],
        dest        : build + '/html/',
        options     : {
            pretty : true
        }
    },
    javascript:{
        name        : 'javascript',
        src         : [src + '/js/**/*.js'],
        dest        : build + '/js/'
    },
    jshint:{
        name        : 'jshint',
        src         : [src + '/js/**/*.js']
    },
    browsersync:{
        name        : 'browsersync',
        options     : {
            files : [
                'build/html/**/*.html',
                'build/css/**/*.css',
                'build/js/**/*.js'
            ],
            baseDir: build + '/',
            index:'html/popup.html'
        }
    },
    watch:{
        name    : 'watch'
    }
};
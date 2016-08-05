var paths = require('../paths');

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function (done) {
    browserSync.init({
        online: false,
        open: false,
        port: 9000,
        server: {
            baseDir: ['.'],
            middleware: function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        }
    }, done);
});

gulp.task('dev', ['serve'], function () {
    gulp.watch(paths.scripts, ['build-scripts']).on('change', browserSync.reload);
    gulp.watch(paths.styles, ['build-styles']).on('change', browserSync.reload);
    gulp.watch(paths.templates, ['build-templates']).on('change', browserSync.reload);
});
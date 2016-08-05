var paths = require('../paths');
var context = require('../gulp-context');

var runSequence = require('run-sequence');

var gulp = require('gulp');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('build-scripts', function () {
    // TODO: add script build
});

gulp.task('build-templates', function () {
    // TODO: add template build
});

var reportError = function (error) {
    notify({
        title: 'Gulp Task Error',
        message: 'Check the console.'
    }).write(error);

    console.log(error.toString());

    // Explicitely exit the stream, which gracefully kicks out of the task, letting watch survive
    this.emit('end');
    if (context.env !== 'watch') {
        return process.exit(2);
    }
};

gulp.task('build-styles', function () {
    return gulp.src(paths.styles)
        .pipe(plumber({errorHandler: reportError}))
        .pipe(changed(paths.output, {extension: '.css'}))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
        }))
        .pipe(gulp.dest(paths.output));
});

gulp.task('build', function (callback) {
    return runSequence(
        'clean',
        ['build-scripts', 'build-templates', 'build-styles'],
        function (err) {
            if (err) {
                var exitCode = 2;
                console.log('[ERROR] gulp build task failed', err);
                console.log('[FAIL] gulp build task failed - exiting with code ' + exitCode);
                return process.exit(exitCode);
            } else {
                return callback();
            }
        }
    );
});
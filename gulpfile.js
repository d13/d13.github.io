const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
//const autoprefixer = require('gulp-autoprefixer');
const rollupEach = require('gulp-rollup-each');

function styles() {
    return src('src/styles/*.scss', { sourcemaps: true })
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        // css custom property support makes this practically pointless
        //      (see: https://caniuse.com/#feat=css-variables vs npx browserslist '> .5%')
        // .pipe(autoprefixer({
        //     browsers: ['> .5%'],
        //     cascade: false
        // }))
        .pipe(dest('assets/styles'), { sourcemaps: true });
}

// TODO: add typescript compilation
function scripts() {
    return src('src/scripts/*.js', { sourcemaps: true })
        //.pipe(concat('scripts.js'))
        .pipe(
          rollupEach({
            output: {
              format: 'iife'
            }
          })
        )
        .pipe(dest('assets/scripts', { sourcemaps: true }));
}

// watch('src/styles/**/*.scss', styles);
// watch('src/scripts/*.js', scripts);

exports.scripts = scripts;
exports.styles = styles;
exports.default = parallel(styles, scripts);
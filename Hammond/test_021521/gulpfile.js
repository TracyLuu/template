const { src,dest,series } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

function babelJS() {
    return src('js/script.js')
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(uglify())
    .pipe(dest('dist'))
}

function cleanUp() {
    return src('css/*.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS({debug: true},
        (details) => {
            console.log(`${details.name}: ${details.stats}`);
            console.log(`${details.name}: ${details.stats}`);
        })).pipe(dest('dist'))
}

exports.default = series(babelJS, cleanUp);
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const exec = require('child_process').exec;
const inject = require('gulp-inject-string');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sass = require('gulp-sass')(require('node-sass'));
const stylelint = require('@ronilaukkarinen/gulp-stylelint');

// our SCSS files!
const scss = [
    './src/scss/**/*.scss'
];

// lint SCSS
function scssLint() {

    return gulp.src(scss).pipe(
        stylelint({
            reporters: [
                {
                    formatter: 'string',
                    console: true,
                }
            ],
        }),
    );

}
/*
// generate & minify css

function scssCompile() {

    return gulp.src([
            './src/scss/theme_home.scss',
            './src/scss/theme_about.scss',
        ])
        .pipe(sass({
            outputStyle: 'compressed',
        }).on('error', sass.logError))
        .pipe(rename({
            extname: '.min.css',
        }))
        .pipe(gulp.dest('./src/assets/css'))

}
*/

// generate & minify css as a critical template
function scssCompile() {

    return gulp.src([
            './src/scss/theme_home.scss',
            './src/scss/theme_about.scss',
        ])
        .pipe(sass({
            outputStyle: 'compressed',
        }).on('error', sass.logError))
        .pipe(rename({
            extname: '.njk',
        }))
        .pipe(inject.wrap('<style>\n', '</style>'))
        .pipe(gulp.dest('./src/templates/includes/critical/'))

}

// scss build task
exports.scss = gulp.parallel(scssLint, scssCompile);

function watch() {
    gulp.watch(scss, { ignoreInitial: false }, gulp.series('scss'))
};

exports.default = watch;


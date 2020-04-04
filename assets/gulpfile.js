const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const replace = require('gulp-replace');
const webp = require('gulp-webp');

gulp.task('js', () => 
    gulp.src(['js/partials/**.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .on('error', err => {
            console.log(err.toString());
        })
        .pipe(gulp.dest("js/"))
);

gulp.task("img", () =>
    gulp.src('img/**/*.{png,svg,jpg,webp,jpeg,gif}')
        .pipe(imagemin())
        .on('error', (err) => {
            console.log(err.toString());
        })
        .pipe(gulp.dest('img/'))
);

gulp.task('webp', () =>
    gulp.src('img/**/*.{png,svg,jpg,jpeg,gif}')
        .pipe(webp({
            quality: 60,
            preset: 'photo',
            method: 6
        }))
        .pipe(gulp.dest('img/'))
);

gulp.task('css', () =>
  gulp.src('css/vendor/bootstrap-iso.css')
    .pipe(cleanCSS())
    .on('error', (err) => {
      console.log(err.toString());
    })
    .pipe(concat('bootstrap-iso.min.css'))
    .pipe(gulp.dest('css/vendor/'));
);

gulp.task('isolate', function isolateBootstrap() {
  return gulp.src('css/bootstrap-iso.less')
    .pipe(less({strictMath: 'on'}))
    .pipe(replace('.bootstrap-iso html', ''))
    .pipe(replace('.bootstrap-iso body', ''))
    .pipe(gulp.dest('css/vendor/'));
});

gulp.task("isolate-bootstrap-css", gulp.series('isolate', 'css'));


gulp.task("default", gulp.series(gulp.parallel('js', 'css', 'img')));

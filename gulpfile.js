var gulp = require("gulp");
var concat = require('gulp-concat');
var concatcss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var sass = require('gulp-sass');

// Skicka html-filen till pub-mappen
gulp.task("copyhtml", function(){
    gulp.src("src/*.html")
    .pipe(gulp.dest("pub/"))
});

// Skicka bilderna till pub-mappen
gulp.task("sendpics", function(){
    gulp.src("src/images/*.jpg")
    .pipe(gulp.dest("pub/images"))
});

// Konkatenera och minimera JS
gulp.task('miniscript', function() {
  return gulp.src('src/JavaScript/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('pub'));
});

// Konkatenera CSS
gulp.task('minicss', function() {
  return gulp.src('src/css/*.css')
    .pipe(concatcss('style.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('pub'));
});

// Konvertera från SASS till CSS
gulp.task('sass', function () {
return gulp.src('src/scss/*.scss')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('pub/css'));
});

gulp.task('sass:watch', function () {
gulp.watch('src/scss/*.scss', ['sass']);
});

// Task för livereload
gulp.task("watcher", function(){
    gulp.watch("src/JavaScript/*.js", ["miniscript"]);
    gulp.watch("src/*.html", ["copyhtml"]);
    gulp.watch("src/css/*.css", ["minicss"]);
    gulp.watch("src/images/*", ["sendpics"]);
});

// Start av livereload
gulp.task("default", ["copyhtml", "miniscript", "minicss", "sendpics", "watcher", 'sass:watch']);
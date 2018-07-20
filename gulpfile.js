var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssdeclsort = require("css-declaration-sorter");
var mqpacker = require("css-mqpacker");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var babel = require("gulp-babel");

gulp.task("sass", function () {
  return (
    gulp
      .src("./scss/common.scss")
      .pipe(plumber())
      //.pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: "compact" }))
      .pipe(sass())
      .pipe(postcss([cssdeclsort({ order: "smacss" })]))
      .pipe(postcss([mqpacker()]))
      //.pipe(postcss([autoprefixer({ browsers: ['last 1 versions'] })]))
      .pipe(postcss([autoprefixer({ browsers: ["ie 11"] })]))
      //.pipe(sourcemaps.write())
      .pipe(gulp.dest("./css"))
  );
});

var jsFiles = [
  "js/jquery-3.3.1.js",
  "js/bootstrap.js",
  "js/bootstrap-datepicker.js",
  "js/bootstrap-datepicker.ja.min.js",
  "js/custom.js",
];

gulp.task("js", function () {
  gulp
    .src(jsFiles)
    .pipe(concat("common.js"))
    .pipe(gulp.dest("./js"))
    .pipe(babel())
    .pipe(
      rename({
        suffix: "-dist",
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("./js"));
});

// Rerun the task when a file changes
gulp.task("default", function () {
  gulp.watch("./scss/**/*.scss", ["sass"]);
  gulp.watch("./js/**/*.js", ["js"]);
});

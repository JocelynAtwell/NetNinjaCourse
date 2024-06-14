const { src, dest, watch, series } = require("gulp");
const sass = require('gulp-sass')(require("sass"));
const purgecss = require("gulp-purgecss");

//function used to compile sass into css
function buildStyles() {
    return src("sass/**/*.scss")
        .pipe(sass())
        // .pipe(purgecss({ content: ["*.html"]}))
        .pipe(dest("css"))
}

//function to watch the source file and automatically run the buildStyles function
function watchTask() {
    watch(["sass/**/*.scss", "*.html"], buildStyles)
}

exports.default = series(buildStyles, watchTask);
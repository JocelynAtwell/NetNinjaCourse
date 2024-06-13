const { src, dest, watch, series } = require("gulp");
const sass = require('gulp-sass')(require("sass"));

//function used to compile sass into css
function buildStyles() {
    return src("shinobi/**/*.scss")
        .pipe(sass())
        .pipe(dest("css"))
}

//function to watch the source file and automatically run the buildStyles function
function watchTask() {
    watch(["shinobi/**/*.scss"], buildStyles)
}

exports.default = series(buildStyles, watchTask);
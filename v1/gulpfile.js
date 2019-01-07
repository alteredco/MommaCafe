const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("default", () => {
  console.log("Hooray for gulp!! It's working!!");
});

gulp.task("html", ()=> {
  console.log("Imagine something useful being done to your HTML here!");
});

//converts sass to css with gulp-sass
gulp.task("sass", function() {
  return gulp.src("app/scss/styles.scss")
  .pipe(sass()) 
  .pipe(gulp.dest("app/css"))
});
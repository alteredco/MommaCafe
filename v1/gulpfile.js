const gulp = require("gulp"),
sass = require("gulp-sass"),
browserSync = require("browser-sync").create(),
nodemon = require("gulp-nodemon"),
watch = require("gulp-watch");


gulp.task("default", () => {
  console.log("Hooray for gulp!! It's working!!");
});

gulp.task("styles", () => {
  console.log("imagine SASS task happening here.");
});


// starts the gulp server
gulp.task("nodemon", cb => {
  let started = false;

  return nodemon({
    script: "./app/app.js",
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  }).on("start", () => {
    if (!started) {
      cb();
      started = true;
    }
  });
});

//converts sass to css with gulp-sass
gulp.task("sass", () => {
  return gulp.src("./app/assets/scss/styles.scss")
  .pipe(sass()) 
  .pipe(gulp.dest("./app/assets/css"))
});

// syncs server with browser
gulp.task(
  "browser-sync",
  gulp.series("nodemon", () => {
    browserSync.init(null, {
      proxy: "http://localhost:3000",
      files: ["./app/app.js"],

      port: 5000
    });
  })
);

gulp.task("serve", gulp.series("browser-sync", "sass", () => {
  gulp.watch("./app/assets/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("./app/app.js").on('change', browserSync.reload);
}));

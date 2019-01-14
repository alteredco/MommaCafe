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

// syncs server with browser
gulp.task(
  "browser-sync",
  gulp.series("nodemon", () => {
    browserSync.init(null, {
      proxy: "http://localhost:3000",
      files: ["./app/*.js"],

      port: 5000
    });
  })
);

gulp.task("serve", gulp.series("browser-sync", () => {}));

// syncs reload of page with actions
gulp.task("watch", () => {
  watch("./app/*.js", () => {
    gulp.start("default")
  })
  watch("./app/assets/css/**/*.css", () =>{
    gulp.start("styles")
  })
});

//converts sass to css with gulp-sass
gulp.task("sass", () => {
  return gulp.src("./app/assets/scss/styles.scss")
  .pipe(sass()) 
  .pipe(gulp.dest("./app/assets/css"))
});
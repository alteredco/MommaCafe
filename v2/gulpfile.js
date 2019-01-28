const gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
nested =  require("postcss-nested"),
cssvars = require("postcss-simple-vars"),
nodemon = require("gulp-nodemon"),
autoprefixer = require("autoprefixer"),
browserSync = require("browser-sync").create();


gulp.task("default", () => {
  console.log("Hooray for gulp!! It's working!!");
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
gulp.task("styles", () => {
  return gulp.src("./app/assets/css/styles.css")
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/assets"))
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

gulp.task("serve", gulp.series("browser-sync", () => {
  gulp.watch("./app/assets/css/styles.css", () => {
    gulp.start("styles");
  })
  gulp.watch("./app/app.js").on('change', browserSync.reload);
  gulp.watch("./app/views/**/*.ejs").on('change', browserSync.reload);
}));

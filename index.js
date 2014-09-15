var voyager = require('voyager')
  , csso = require('gulp-csso')
  , plumber = require('gulp-plumber')
  , stylus = require('gulp-stylus');

voyager.task('stylus', ['styles', 'prebuild'], function (done) {
  this.in.src('stylesheets/main.styl')
    .pipe(plumber())
    .pipe(stylus({ errors: true }))
    .pipe(this.out.dev('stylesheets'))
    .on('end', done);
});

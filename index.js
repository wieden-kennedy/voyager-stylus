var voyager = require('voyager')
  , csso = require('gulp-csso')
  , plumber = require('gulp-plumber')
  , stylus = require('gulp-stylus')
  , vfs = require('vinyl-fs')
  , CWD = process.cwd();

voyager.task('stylus', 'styles', function (done) {
  vfs.src([
      CWD + '/src/stylesheets/main.styl'
    ])
    .pipe(plumber())
    .pipe(stylus({ errors: true }))
    .pipe(vfs.dest(CWD + '/.dev/stylesheets'))
    .on('end', done);
});

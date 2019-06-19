
const path = require('path')
const fs = require('fs')
const gulp = require('gulp')
const rollup = require('rollup')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const babel=require('gulp-babel');
const babels = require('rollup-plugin-babel');
const sass = require('gulp-sass');

const dir_name = "release"
const css_path = ['./src/*.scss']
gulp.task("font",()=>{
   return gulp.src("./src/font/*")
   .pipe(gulp.dest('release/font'))
})

gulp.task("scss",()=>{
  return gulp
  .src("./css/main.scss")
  .pipe(sass())
   .pipe(gulp.dest('release/css'))
})

// 默认任务配置
gulp.task('files', () => {
    // 监听 css 原始文件的变化
    gulp.watch('./css/**/*.scss', gulp.series(gulp.parallel('scss')))
})

gulp.task('default',gulp.series(gulp.parallel('scss','files')));




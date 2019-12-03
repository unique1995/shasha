//导入插件
let gulp =require('gulp'),
    concat = require('gulp-concat'),//合并js
    uglify = require('gulp-uglify'),//压缩js
    img = require('gulp-imagemin'),//压缩图片
    sass = require('gulp-sass'),//编译sass
    babel = require('gulp-babel')//es6转es5
    rename = require('gulp-rename')//重命名

    gulp.task('babel',()=>{
        gulp.src('./src/js/es6/*.js')
        .pipe(babel())
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest('./dist/js'))
    })
    gulp.task('concat',()=>{
        gulp.src('./src/js/es5/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
    })
    gulp.task('img',()=>{
        gulp.src('./src/img/*.*')
        .pipe(img())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/img'))
    })
    gulp.task('sass',()=>{
        gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
    })

    gulp.task('default',()=>{
        gulp.watch('./src/js/es6/*.js',['babel']);
        gulp.watch('./src/js/*.js',['concat']);
        gulp.watch('./src/sass/*.scss',['sass']);
        gulp.watch('./src/img/*.*',['img']);
       
    })



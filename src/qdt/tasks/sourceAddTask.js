const fs = require('fs');
const colors = require('colors');
const gulp = require('gulp');
const { qdt_verbose, params } = require("../Library");

const sourceAddTask = function(nameParam) {
    if (params.length === 0 || typeof params[nameParam] == 'undefined') {
        return console.log(colors.red(qdt_verbose.source_add_unk_name));
    }

    if (fs.existsSync("./sources/" + params[nameParam])) {
        return console.log(colors.red(qdt_verbose.source_add_exists_name));
    }

    gulp.src('./sources/sample/**/**').pipe(gulp.dest('./sources/' + params[nameParam]));

    console.log(colors.green(qdt_verbose.source_add_done.replace('[name]', params[nameParam])));
};

module.exports = sourceAddTask;
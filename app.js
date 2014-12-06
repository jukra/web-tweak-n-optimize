"use strict";
var pjson = require('./package.json');
var mc = require("./modules/minify-css.js");
var mj = require("./modules/minify-js.js");
var mh = require("./modules/minify-html.js");
var mi = require("./modules/minify-images.js");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var optionselected = false;

function minifyHtml(answer) {
    var result = mh.htmlminifer(answer);
    if (result !== undefined) {
        var filename = answer.replace(/^.*[\\\/]/, '');
        var streamWrite = fs.createWriteStream('min/' + filename);
        streamWrite.write(result);
        streamWrite.end();
    }
}

function minifyJs(answer) {
    mj.jsminifer(answer, function (result) {
        var filename = answer.replace(/^.*[\\\/]/, '');
        var streamWrite = fs.createWriteStream('min/' + filename);
        streamWrite.write(result);
        streamWrite.end();

    });
}

function minifyCss(answer) {
    mc.cssminifer(answer, function (result) {
        var filename = answer.replace(/^.*[\\\/]/, '');
        var streamWrite = fs.createWriteStream('min/' + filename);
        streamWrite.write(result);
        streamWrite.end();
    });
}

function minifyImage(answer) {
    mi.imageminifer(answer, true, function () {});
}


function printHeader() {
    console.log("");
    console.log("---------------------------------------");
    console.log("W E B - T W E A K - N - O P T I M I Z E");
    console.log("---------------------------------------");
    console.log("");
}

var opts = require("nomnom")
    .option('help', {
        abbr: 'h',
        flag: true,
        help: 'Lists this message of all commands available'
    })
    .option('minifyall', {
        abbr: 'a',
        flag: true,
        help: 'Minifies html, js and css files'
    })
    .option('minifyjs', {
        abbr: 'j',
        flag: true,
        help: 'Minifies only js files'
    })
    .option('minifyhtml', {
        abbr: 'w',
        flag: true,
        help: 'Minifies only html files'
    })
    .option('minifycss', {
        abbr: 'c',
        flag: true,
        help: 'Minifies only css files'
    })
    .option('minifyimages', {
        abbr: 'o',
        flag: true,
        help: 'Minifies only image files'
    })
    .option('version', {
        abbr: 'V',
        flag: true,
        help: 'Show version number',
        callback: function () {
            return pjson.version;
        }
    })
    .parse();
if (opts.minifyall) {
    printHeader();
    optionselected = true;
    console.log("Selected the ultimate minifer...");
    rl.question("Source path: ", function (answer) {
        minifyJs(answer);
        minifyCss(answer);
        minifyHtml(answer);
        minifyImage(answer);
        rl.close();
    });

}
if (opts.minifyhtml) {
    printHeader();
    optionselected = true;
    console.log("Selected HTML minifer...");
    rl.question("Source path: ", function (answer) {
        minifyHtml(answer);
        rl.close();
    });

}
if (opts.minifyjs) {
    printHeader();
    optionselected = true;
    console.log("Selected JS minifer...");
    rl.question("Source path: ", function (answer) {
        minifyJs(answer);
        rl.close();
    });

}
if (opts.minifycss) {
    printHeader();
    optionselected = true;
    console.log("Selected CSS minifer...");
    rl.question("Source path: ", function (answer) {
        minifyCss(answer);
        rl.close();
    });
}
if (opts.minifyimages) {
    printHeader();
    optionselected = true;
    console.log("Selected image minifer...");
    rl.question("Source path: ", function (answer) {
        minifyImage(answer);
        rl.close();
    });
}
if (optionselected === false) {
    printHeader();
    console.log("You didn't select any option, please refer to --help if needed");
    console.log("node app.js --help");
    console.log("");
    process.exit();
}

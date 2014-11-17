var pjson = require('./package.json');
var mc = require("./modules/minify-css.js");
var mj = require("./modules/minify-js.js");
var mh = require("./modules/minify-html.js");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var optionselected = false;

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
    console.log("Selected the ultimate minifier...");
    rl.question("Source path: ", function (answer) {
        mj.jsminifer(answer);
        mc.cssminifer(answer);
        mh.htmlminifer(answer);
        rl.close();
    });

}
if (opts.minifyhtml) {
    printHeader();
    optionselected = true;
    console.log("Selected HTML minier...");
    rl.question("Source path: ", function (answer) {
        mh.htmlminifer(answer);
        rl.close();
    });

}
if (opts.minifyjs) {
    printHeader();
    optionselected = true;
    console.log("Selected JS minier...");
    rl.question("Source path: ", function (answer) {
        mj.jsminifer(answer);
        rl.close();
    });

}
if (opts.minifycss) {
    printHeader();
    optionselected = true;
    console.log("Selected CSS minier...");
    rl.question("Source path: ", function (answer) {
        mc.cssminifer(answer);
        rl.close();
    });
}
if (optionselected == false) {
    printHeader();
    console.log("You didn't select any option, please refer to --help if needed");
    console.log("");
}

function printHeader() {
    console.log("");
    console.log("---------------------------------------");
    console.log("W E B - T W E A K - N - O P T I M I Z E");
    console.log("---------------------------------------");
    console.log("");
}
/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/
//Using sample data in static folder for testing

var fs = require("fs");
var mc = require("../modules/minify-css.js");
var mj = require("../modules/minify-js.js");
var mh = require("../modules/minify-html.js");

exports.testMinifier = function (test) {
    mj.jsminifer("static");
    mc.cssminifer("static");
    mh.htmlminifer("static");
    console.log("Test data done!");
    console.log("");
    test.expect(1);
    var filenames = fs.readdirSync("static");
    var minifiedFilenames = fs.readdirSync("static/min/");

    var totalFileSize = 0;
    var totalMinifiedSize = 0;
    for (var i in filenames) {
        var fullpath = "static/" + filenames[i];
        var ws = fs.statSync(fullpath);
        console.log(fullpath);
        console.log(ws["size"] + " bytes");
        parseInt(totalFileSize = totalFileSize + ws["size"]);
    }
    for (var i in minifiedFilenames) {
        var fullpath = "static/min/" + minifiedFilenames[i];
        console.log(fullpath);
        var wm = fs.statSync(fullpath);
        console.log(wm["size"] + " bytes");
        parseInt(totalMinifiedSize = totalMinifiedSize + wm["size"]);
    }
    console.log("");
    console.log("");
    console.log("Unminified total file size: ");
    console.log(totalFileSize);
    console.log("Minified total file size: ");
    console.log(totalMinifiedSize);
    console.log("");
    console.log("");
    if (totalMinifiedSize < totalFileSize) {
        test.ok(true, "Minify OK");
        console.log("Minified files are indeed smaller. Test OK!");
    } else {
        test.ok(false, "Minify not OK");
        console.log("Minified files are NOT smaller. Test FAILS!");
    }
    test.done();
};
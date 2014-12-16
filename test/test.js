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

//Requires
var fs = require("fs");
var cb = require("../cbhandlers.js");
var mc = require("../modules/minify-css.js");
var mj = require("../modules/minify-js.js");
var mh = require("../modules/minify-html.js");
var mi = require("../modules/minify-images.js");

//The actual test
exports.testMinifier = function (test) {
    mj.jsminifer("samples");
    mc.cssminifer("samples");
    mh.htmlminifer("samples");
    mi.imageminifer("samples");
    cb.minifyJs("samples/sample.js");
    cb.minifyCss("samples/sample.css");
    cb.minifyHtml("samples/sample.html");
    cb.minifyImage("samples/bigpng.png");
    console.log("Test data done!");
    console.log("");
    test.expect(1);
    var filenames = fs.readdirSync("samples");
    var minifiedFilenames = fs.readdirSync("min");
    var totalFileSize = 0;
    var totalMinifiedSize = 0;
    for (var i in filenames) {
        var fullpath = "samples/" + filenames[i];
        var ws = fs.statSync(fullpath);
        console.log(fullpath);
        console.log(ws["size"] + " bytes");
        parseInt(totalFileSize = totalFileSize + ws["size"]);
    }
    for (var i2 in minifiedFilenames) {
        var fullpath2 = "min/" + minifiedFilenames[i2];
        console.log(fullpath2);
        var wm = fs.statSync(fullpath2);
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
        console.log("");
    } else {
        test.ok(false, "Minify not OK");
        console.log("Minified files are NOT smaller. Test FAILS!");
    }
    test.done();
};

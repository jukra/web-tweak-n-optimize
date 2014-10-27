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
var fs = require("fs");

exports.testMinifier = function(test) {
  test.expect(1);
  var wjs = fs.statSync("./dist/sample.js");
  var wcss = fs.statSync("./dist/sample.css");
  var whtml = fs.statSync("./dist/sample.html");
  var minifiedFileSizeInBytes = wjs["size"] + wcss["size"] + whtml["size"];
  console.log("Minified file size: ");
  console.log(minifiedFileSizeInBytes);
  var js = fs.statSync("./static/js/sample.js");
  var css = fs.statSync("./static/css/sample.css");
  var html = fs.statSync("./static/html/sample.html");
  var unMinifiedFileSizeInBytes = js["size"] + css["size"] + html["size"];
  console.log("UnMinified file size: ");
  console.log(unMinifiedFileSizeInBytes);
  if (minifiedFileSizeInBytes < unMinifiedFileSizeInBytes) {
    test.ok(true, "Minify OK");
    console.log("Minified files are indeed smaller. Test OK!");
  } else {
    test.ok(false, "Minify not OK");
    console.log("Minified files are NOT smaller. Test FAILS!");
  }
  test.done();
};

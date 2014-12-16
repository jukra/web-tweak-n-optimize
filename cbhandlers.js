var mc = require("./modules/minify-css.js");
var mj = require("./modules/minify-js.js");
var mh = require("./modules/minify-html.js");
var mi = require("./modules/minify-images.js");

exports.minifyHtml = function (answer) {
    var result = mh.htmlminifer(answer);
    if (result !== undefined) {
        var filename = answer.replace(/^.*[\\\/]/, '');
        var streamWrite = fs.createWriteStream('min/' + filename);
        streamWrite.write(result);
        streamWrite.end();
    }
};

exports.minifyJs = function (answer) {
    mj.jsminifer(answer, function (result) {
        var filename = answer.replace(/^.*[\\\/]/, '');
        var streamWrite = fs.createWriteStream('min/' + filename);
        streamWrite.write(result);
        streamWrite.end();

    });
};

exports.minifyCss = function (answer) {
    mc.cssminifer(answer, function (result) {
        var filename = answer.replace(/^.*[\\\/]/, '');
        var streamWrite = fs.createWriteStream('min/' + filename);
        streamWrite.write(result);
        streamWrite.end();
    });
};

exports.minifyImage = function (answer) {
    mi.imageminifer(answer, true, function () {});
};

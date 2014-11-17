exports.cssminifer = function (answer) {
    fs = require('fs');
    var minify = require('minify');
    var filenames = fs.readdirSync(answer);
    var cssfiles = [];
    for (var i in filenames) {
        var ext = filenames[i].split('.').pop();
        if (ext === "css") {
            cssfiles.push(filenames[i]);
        }
    }
    console.log("Minifying following CSS files:");
    for (var f in cssfiles) {
        var minfile = answer + "/min/" + cssfiles[f];
        var file = answer + "/" + cssfiles[f];
        console.log(file);
        minify(file, {
            returnStream: true
        }, function (error, stream) {
            var streamWrite = fs.createWriteStream(minfile);
            if (error) {
                console.error(error.message);
            } else {
                streamWrite.write(stream);
                streamWrite.end();
            }
        });
    }
    console.log("All done!");
    console.log("");
};

exports.htmlminifer = function (answer) {
    fs = require('fs');
    var minifyh = require('html-minifier').minify;
    //Check if folder or direct file
    var re = /(?:\.([^.]+))?$/;
    var answerext = re.exec(answer)[1];
    var result;
    if (answerext !== undefined) {
        var filename = answer.split('/')[1];
        var minfile = "min/" + filename;
        var file = answer;
        console.log("Direct file path");
        console.log("Minifying following file:");
        console.log(filename);
        var data = fs.readFileSync(file, 'utf8');
        result = minifyh(data, {
            removeComments: true,
            collapseWhitespace: true,
            minifyJS: true,
            minifyCSS: true
        });
        var buffer = new Buffer(result);
        return buffer;
    } else {
        var filenames = fs.readdirSync(answer);
        var htmlfiles = [];
        for (var i in filenames) {
            var ext = filenames[i].split('.').pop();
            if (ext === "html") {
                htmlfiles.push(filenames[i]);
            }
        }
        console.log("Minifying following HTML files:");
        for (var f in htmlfiles) {
            var minfile = "min/" + htmlfiles[f];
            var file = answer + "/" + htmlfiles[f];
            console.log(file);
            fs.readFile(file, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                result = minifyh(data, {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyJS: true,
                    minifyCSS: true
                });
                var streamWrite = fs.createWriteStream(minfile);
                streamWrite.write(result);
                streamWrite.end();
            });
        }
        console.log("All done!");
    }
    console.log("");
};

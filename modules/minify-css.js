exports.cssminifer = function (answer) {
    fs = require('fs');
    var minify = require('minify');
    //Check if folder or direct file
    var re = /(?:\.([^.]+))?$/;
    var answerext = re.exec(answer)[1];
    if (answerext !== undefined) {
        console.log("Direct file path");
        var filename = answer.split('/')[1];
        var minfile = "min/" + filename;
        var file = answer;
        minify(file, {
            returnStream: true
        }, function (error, stream) {
            var streamWrite = fs.createWriteStream(minfile);
            if (error) {
                console.error(error.message);
            } else {
                streamWrite.write(stream);
                streamWrite.end();
                return minfile;
            }
        });
    }
    else {
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
            var minfile = "min/" + cssfiles[f];
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
    }
    console.log("All done!");
    console.log("");
};

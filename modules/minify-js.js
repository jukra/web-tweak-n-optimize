exports.jsminifer = function (answer) {
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
        var jsfiles = [];
        for (var i in filenames) {
            var ext = filenames[i].split('.').pop();
            if (ext === "js") {
                jsfiles.push(filenames[i]);
            }
        }
        console.log("Minifying following JS files:");
        for (var f in jsfiles) {
            var minfile = "min/" + jsfiles[f];
            var file = answer + "/" + jsfiles[f];
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

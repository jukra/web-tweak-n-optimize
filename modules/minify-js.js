exports.jsminifer = function (answer, callback) {
    fs = require('fs');
    var minify = require('minify');
    //Check if folder or direct file
    var re = /(?:\.([^.]+))?$/;
    var answerext = re.exec(answer)[1];
    if (answerext !== undefined) {
        console.log("Direct file path");
        console.log("Minifying following file:");
        var filename = answer.split('/')[1];
        console.log(filename);
        var minfile = "min/" + filename;
        var file = answer;
        var content;
        minify(file, {
            returnStream: true
        }, function (error, stream) {
            if (error) {
                console.log(error.message);
            } else {
                content = stream.toString();
                var buffer = new Buffer(content);
                callback(buffer);
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
                    console.log(error.message);
                } else {
                    streamWrite.write(stream);
                    streamWrite.end();
                }
            });
        }
    }
};

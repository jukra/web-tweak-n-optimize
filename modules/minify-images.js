exports.imageminifer = function (answer) {
    fs = require('fs');
    var Imagemin = require('imagemin');
    //Check if folder or direct file
    var re = /(?:\.([^.]+))?$/;
    var answerext = re.exec(answer)[1];
    if (answerext !== undefined) {
        console.log("Direct file path");
        var imagemin = new Imagemin()
            .src(answer)
            .dest('min')
            .use(Imagemin.jpegtran({ progressive: true }));
        imagemin.run(function (err, files) {
            if (err) {
                console.log(files);
                throw err;
            }
        });
    }
    else {
        var filenames = fs.readdirSync(answer);
        var jsfiles = [];
        for (var i in filenames) {
            var ext = filenames[i].split('.').pop();
            if (ext === "gif" || ext === "jpg" || ext === "png" || ext === "svg" ) {
                jsfiles.push(filenames[i]);
            }
        }
        console.log("Minifying following imagefiles files:");
        for (var f in jsfiles) {
            var file = answer + "/" + jsfiles[f];
            console.log(file);
        }
        var Imagemin = require('imagemin');

        var imagemin = new Imagemin()
            .src(answer + '/*.{gif,jpg,png,svg}')
            .dest(answer + '/min')
            .use(Imagemin.jpegtran({ progressive: true }));

        imagemin.run(function (err, files) {
            if (err) {
                console.log(files);
                throw err;
            }
        });
    }
    console.log("All done!");
    console.log("");
};

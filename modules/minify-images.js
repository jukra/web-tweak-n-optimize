exports.imageminifer = function (answer, destination) {
    fs = require('fs');
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
        .dest(destination)
        .use(Imagemin.jpegtran({ progressive: true }));

    imagemin.run(function (err, files) {
        if (err) {
            console.log(files);
            throw err;
        }
    });
    console.log("All done!");
    console.log("");
};

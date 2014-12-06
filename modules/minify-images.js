exports.imageminifer = function (answer, createfiles, callback) {
    fs = require('fs');
    var Imagemin = require('imagemin');
    var dest;
    if (createfiles === true){
        dest = "min";
    }
    else {
        dest = null;
    }
    //Check if folder or direct file
    var re = /(?:\.([^.]+))?$/;
    var answerext = re.exec(answer)[1];
    if (answerext !== undefined) {
        console.log("Direct file path");
        var imagemin = new Imagemin()
            .src(answer)
            .dest(dest)
            .use(Imagemin.svgo())
            .use(Imagemin.gifsicle({ interlaced: true }))
            .use(Imagemin.jpegtran({ progressive: true }))
            .use(Imagemin.pngquant());
        imagemin.run(function (err, files) {
            if (err) {
            console.log(err, files);
            }
            callback(files);
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
            .dest('min')
            .use(Imagemin.svgo())
            .use(Imagemin.gifsicle({ interlaced: true }))
            .use(Imagemin.jpegtran({ progressive: true }))
            .use(Imagemin.pngquant());
        imagemin.run();
    }
};

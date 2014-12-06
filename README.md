web-tweak-n-optimize
====================
> Simple app which can optimize your image, css, js and html files.

[![wercker status](https://app.wercker.com/status/09ee66ec76d4aecbfd2d5c7adcd0e60f/m "wercker status")](https://app.wercker.com/project/bykey/09ee66ec76d4aecbfd2d5c7adcd0e60f)
[![Coverage Status](https://img.shields.io/coveralls/jukra/web-tweak-n-optimize.svg)](https://coveralls.io/r/jukra/web-tweak-n-optimize?branch=master)

NOTE: Make sure ImageMagick is installed on your system if you want to use the image optimizations.

Features:
- Minify css, js and html files
- Show result (file sizes before and after) in test
- Magical one line option which does everything for you
- Commandline menu interface (done with options, try node app.js --help)
- Specify which files will be edited
- Optimize images

Features usable with gulp plugin:
- Specify output folder
- Linting before optimizing, if ok then continue (eslint in pipe)

Disregarded features:
- Image grayscaling, generating thumbs etc. (out of this projects scope, which is focusing on optimization)

License:
- MIT
- [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)

Version 0.1.0:
- Init node.js with depencies
- You can run node app.js -V and node app.js -h

Vesion 0.2.0:
- You can run the app with npm start and test it with npm test
- Gulp, nodeunit, testing, wercker and minify functions

Vesion 0.3.0:
- Added possibility to run the tool with different settings (node app.js --help to view all the commands)
- Minifies done without gulp for the future
- Added linting without gulp also
- Added more testing
- Addded istanbul, coveralls, and travis
- Added codecoverage badge to this readme file

Vesion 0.4.0:
- Added image optimization and more testing
- Prepared project for task runner use
- Added ability to give direct path to source file instead of just folder

Vesion 0.5.0:
- Changed the way files are created, now using asynchronous functions and buffers (for gulp).
- Small fixes here and there
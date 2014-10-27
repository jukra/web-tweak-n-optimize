web-tweak-n-optimize
====================
> Simple app which can optimize your image, css, js and html files. Also editing pictures to grayscale, thumbs etc.

[![wercker status](https://app.wercker.com/status/09ee66ec76d4aecbfd2d5c7adcd0e60f/m "wercker status")](https://app.wercker.com/project/bykey/09ee66ec76d4aecbfd2d5c7adcd0e60f)

Done so far:
- Minify css, js and html files, at the moment with gulp, **in future using different depencies without gulp!**
- Show result (file sizes before and after) in test
- Magical one line option which does everything for you

Planned features:
- Commandline menu interface
- Specify which files will be edited, specify output folder
- Tweak image files to thumbs, grayscale etc.
- Optimize images
- Linting before optimizing, if ok then continue (option)
- Usable as a taskrunner plugin

Planned use as a plugin with taskrunner:
- On detected file changes on the web project folder, run minifies and image optimization on changed files
- User can setup the dist folder and minifed file names

License:
- MIT
- [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)

Version 0.1.0:
- Init node.js with depencies
- You can run node app.js -V and node app.js -h

Vesion 0.2.0:
- You can run the app with npm start and test it with npm test
- Gulp, nodeunit, testing, wercker and minify functions

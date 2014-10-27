var pjson = require('./package.json');

var opts = require("nomnom")
   .option('help', {
      abbr: 'h',
      flag: true,
      help: 'Lists this message of all commands available',
   })
   .option('version', {
      abbr: 'V',
      flag: true,
      help: 'Show version number',
      callback: function() {
         return pjson.version;
      }
   })
   .parse();

'use strict';

function writeLogsToFile(data){
  var fs = require('fs');
  fs.appendFile('fronted-log.txt', data + '\n', function(err) {
    if (err) throw (err);
  });
}

module.exports = {
  writeLogsToFile: writeLogsToFile
};

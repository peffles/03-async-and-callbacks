'use strict';

const fs = require('fs');

module.exports = (path, callback) => { //eslint-disable-line
  return fs.readFile(
    path, 
    (error, data) => {
      if (error) {
        console.log('ERROR: Could not read file');
        console.log(error);
        return callback(error);
      }
      return callback(null, data.toString('utf8'));
    },
  );
};

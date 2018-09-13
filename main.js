'use strict';

const fileReader = require('./lib/reader');

const random1 = `${__dirname}/data/text1.txt`;
const random2 = `${__dirname}/data/text2.txt`;
const random3 = `${__dirname}/data/text3.txt`;

const files = [text1, text2, text3];

const array = [];

const readFileArray = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }
  
  const currentFilePath = fileArray[currentIndex];
  try {
    return fileReader(currentFilePath, (err, data) => {
      if (err) {
        console.log('ERROR');
      }
      array.push(data);
      readFileArray(fileArray, currentIndex + 1, callback);
    });
  } catch (err) {
    console.log('ERROR');
  }
  return undefined;
};

readFileArray(files, 0, () => {
  console.log('All files have been read');
  console.log(files);
});

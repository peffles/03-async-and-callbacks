'use strict';

const fileReader = require('./lib/reader');

const random1 = `${__dirname}/data/text1.txt`; //eslint-disable-line
const random2 = `${__dirname}/data/text2.txt`; //eslint-disable-line
const random3 = `${__dirname}/data/text3.txt`; //eslint-disable-line

const files = [text1, text2, text3];


const files = [random1, random2, random3]; //eslint-disable-line
// Wyatt- ESLint doesn't have a problem with the disabled lines, but travis freaks out about them
// Trying to see if disabling them works....
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

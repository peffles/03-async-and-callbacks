'use strict';

const reader = require('../lib/reader');

describe('reader.test.js', () => {
  test('file read', (done) => {
    reader(`${__dirname}/../data/text1.txt`, (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('This is some cool text');
      done();
    });
  });
  test('file 2 read', (done) => {
    reader(`${__dirname}/../data/text2.txt`, (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('This is moar cool text!');
      done();
    });
  });
  test('file 3 read', (done) => {
    reader(`${__dirname}/../data/text3.txt`, (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('This is even moar cool text!!');
      done();
    });
  });
});

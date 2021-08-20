const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
   results.push(callback(item)); 

  }
  return results;
};


  
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,["g", "c", "t", "m", "t"])

const results2 = map(words, word => word[2]);
assertArraysEqual(results2, ["o", "n", "o", "j", "m"]);

const results3 = map(words, word => word.length);
assertArraysEqual(results3, [6, 7, 2, 5, 4]);



module.exports= map;
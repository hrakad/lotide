const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let position = sentence[i];
    if (results[position]) {
      results[position].push(i);
    } else {
      results[position] = [i];

    }
  }
  return results;
};

// TEST CODE
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [2]);


module.exports= letterPositions;
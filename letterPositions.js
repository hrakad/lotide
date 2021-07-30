const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Array passed , ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Array failed , ${arr1} !== ${arr2}`);
  }
};


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
console.log(letterPositions("hello world"));
assertArraysEqual(letterPositions("hello").l, [2, 3]);

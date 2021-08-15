const map = function(array, callback) {
  const results = [];
  for (let item of array) {
   results.push(callback(item)); 
  console.log('item BEFORE: ', item);
  console.log('item AFTER: ', callback(item));
  //console.log('---');
  }
  return results;
};

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
  
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1,["g", "c", "t", "m", "t"])

const results2 = map(words, word => word[2]);
console.log(results2);
assertArraysEqual(results2, ["o", "n", "o", "j", "m"]);

const results3 = map(words, word => word.length);
console.log(results3);
assertArraysEqual(results3, [6, 7, 2, 5, 4]);
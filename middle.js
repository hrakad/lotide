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

const middle = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
  
  } if (array.length > 2 && array.length % 2 === 1) {
    result.push(array[Math.floor(array.length / 2)]);
  } else {
    result.push(array[Math.floor(array.length / 2) - 1]);
  }

  return result;
};

console.log(middle[1, 2]);
console.log(middle[1, 2, 3]);
console.log(middle[1, 2, 3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5], 3), [3]);
//assertArraysEqual(middle([1, 2, 3, 4, 5],3) [4]);
// assertArraysEqual(middle([1, 2, 3, 4], [3]));
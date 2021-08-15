const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Array passed , ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Array failed , ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const flatten = function(Arr) {
  let flattenArray = [];
  for (let i of Arr) {
    if (Array.isArray(i)) {
      flattenArray.push(...i);
    } else {
      flattenArray.push(i);
    }
  }
  return flattenArray;
};
  
console.log(flatten([1, 2, [3, 4], 5, [6]]));


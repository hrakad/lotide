const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


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



module.exports= flatten;


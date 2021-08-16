const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
  

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }

  let middleIndex = Math.ceil((array.length) / 2 - 1); 
  const middleValues = [];

  if (array.length > 2 && array.length % 2 === 0) { 
    middleValues.push(array[middleIndex], array[middleIndex + 1]); 
  } else if (array.length > 2 && array.length % 2 !== 0) {
    middleValues.push(array[middleIndex]);
  } 
  return middleValues;
};





module.exports = middle;
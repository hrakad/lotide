const takeUntil = function(array, callback) {
let result = [];
  for(let item of array) {
  //console.log('befor', item);
    if (!callback(item)) { 
    result.push(item);
  
  //console.log('after', callback(item))
    } else {
    return result;
    }
  }
};

// const eqArrays = function(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//     return true;
//   };
  
//   const assertArraysEqual = function(arr1, arr2) {
//     if (eqArrays(arr1, arr2)) {
//       console.log(`✅✅✅ Assertion Array passed , ${arr1} === ${arr2}`);
//     } else {
//       console.log(`🛑🛑🛑 Assertion Array failed , ${arr1} !== ${arr2}`);
//     }
// };

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const result1 = takeUntil(data1, x => x < 0)
console.log(result1);
//assertArraysEqual(result1, [1, 2, 5, 7, 2, -1]);
console.log('---')

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
const assertArraysEqual = function(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i] && arr1.every((value, index) => value === arr2[index])) {
        console.log(`Assertion Array passed , ${arr1} === ${arr2}`);
        break;
      } else {
        console.log(`Assertion Array failed , ${arr1} !== ${arr2}`);
        break;
      }
    }
  };
  assertArraysEqual([1, 2, 3], [1, 2, 3]);
  assertArraysEqual([1, 2, 3], [3, 2, 1]);
  assertArraysEqual(["1", "2", "4"], ["1", "2", 4]);
  assertArraysEqual(["1", "2", "4"], ["1", "2", "4"]);
  assertArraysEqual(["a,b"],["a","b"]);
  
  
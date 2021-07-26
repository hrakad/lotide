const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i] && arr1.every((value, index) => value === arr2[index])) {
      console.log(`Assertion passed , ${arr1} === ${arr2}`);
      break;
    } else {
      console.log(`Assertion failed , ${arr1} !== ${arr2}`);
      break;
    }
  }
};
eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);
eqArrays(["1", "2", "4"], ["1", "2", 4]);
eqArrays(["1", "2", "4"], ["1", "2", "4"]);
eqArrays(["a,b"],["a","b"]);


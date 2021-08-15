const tail = function(array) {
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    if ( array.length >= 2) {
      return array.slice(1);
    }
    return finalArray
  }
}
console.log(tail([1,2,3]));

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion passed  , ${actual} === ${expected}`);
  } else {
    console.log(` 🛑🛑🛑 Assertion failed  , ${actual} !== ${expected}`);
  }
};

// TEST CODE

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 3); 
assertEqual(result[0], "Lighthouse"); 
assertEqual(result[1], "Labs"); 

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 2);

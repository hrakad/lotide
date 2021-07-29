
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion passed  , ${actual} === ${expected}`);
  } else {
    console.log(` 🛑🛑🛑 Assertion failed  , ${actual} != ${expected}`);
  }
};
 
  
const countLetters = function(sentance) {
  const result = {};
  for (let element of sentance) {
    if (element !== " ") {
      if (result[element]) {
        result[element] += 1;
      } else {
        result[element] = 1;
      }
    }
  }
  return result;
};
console.log(countLetters("lighthouse labs"));
const string1 = "Lighthouse Labs";
const countLetters1 = countLetters(string1);
assertEqual(countLetters1["L"], 3);
assertEqual(countLetters1["z"], 0);
assertEqual(countLetters1["h"], 2);
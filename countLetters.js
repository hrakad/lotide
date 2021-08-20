const assertEqual = require('./assertEqual');
  
const countLetters = function(sentance) {
  const result = {};
  for (let element of sentance) {
    if (!element == " ") {
      if (result[element]) {
        result[element] += 1;
      } else {
        result[element] = 1;
      }
    }
  }
  return result;
};

const string1 = "Lighthouse Labs";
const countLetters1 = countLetters(string1);
assertEqual(countLetters1["L"], 2);
assertEqual(countLetters1["z"], 0);
assertEqual(countLetters1["h"], 3);




module.exports= countLetters;
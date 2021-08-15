const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(` ✅✅✅ Assertion passed  , ${actual} === ${expected}`);
    } else {
      console.log(` 🛑🛑🛑 Assertion failed  , ${actual} !== ${expected}`);
    }
  };

const findKey = function(object, callback) {
  for (const key in object) {
    //console.log(object[key]);
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

//console.log(findKey)

const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const results2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3);

const results3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1);


assertEqual(results1, "noma");
assertEqual(results2, "undefined");
assertEqual(results3, "Akaleri");

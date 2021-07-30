const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(` ✅✅✅ Assertion passed  , ${actual} === ${expected}`);
    } else {
      console.log(` 🛑🛑🛑 Assertion failed  , ${actual} != ${expected}`);
    }
  };
  
  const findKeyByValue = function(obj, val) {
    let objKeys = Object.keys(obj);
    let index = 0;
    for (let element in obj) {
      if (obj[element] === val) {
        return objKeys[index];
      }
      index++;
    }
    return undefined;
  }
  
  // TEST CODE
  
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  const daysToStayInCountries = {
    Italy : 9,
    France : 13, 
    Turkey : 6,
    Greece : 8
  }
  
  console.log(findKeyByValue(bestTVShowsByGenre,
  "The Wire"));
  console.log(findKeyByValue(daysToStayInCountries, 13));
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  assertEqual(findKeyByValue(daysToStayInCountries, 7), undefined);
  assertEqual(findKeyByValue(daysToStayInCountries, 11), "Italy");
  
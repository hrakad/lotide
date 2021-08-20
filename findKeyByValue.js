const assertEqual = require('./assertEqual');

  const findKeyByValue = function(obj, val) {
    let objKeys = Object.keys(obj);  
    let result = 0;
    for (let key in obj) {
      if (obj[key] === val) {
        return objKeys[result];
      }
      result++;
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
  
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  assertEqual(findKeyByValue(daysToStayInCountries, 7), undefined);
  assertEqual(findKeyByValue(daysToStayInCountries, 11), "Italy");
  

  module.exports= findKeyByValue;
const assertEqual = require('./assertEqual');

const tail = function(array) {
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    if ( array.length >= 2) {
      return array.slice(1);
    }
    return finalArray
  }
}


module.exports = tail;

const assertEqual = function(array) {
   for (let i = 0; i < array.length ; i++) {
    if (array.length <= 1 ) {
        console.log(`🛑🛑🛑 Assertion failed`  , array[0]);
    } else if (array.length >= 2) {
      console.log(`✅✅✅  assetion passed`, array.slice(1));
      break;
    }
  }
};
  // TEST CODE
  
  assertEqual(["Hello", "Lighthouse Labs", "Bootcamp"]);
  assertEqual([0, 1, 3, 4, 5]);
  assertEqual(["Hello", "World"]);
  assertEqual([3]);
  assertEqual([1,2]);

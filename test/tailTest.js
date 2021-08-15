const tail = require('../tail');
const assertEqual = require('../assertEqual');


// TEST CODE

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 3); 
assertEqual(result[0], "Lighthouse"); 
assertEqual(result[1], "Labs"); 

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
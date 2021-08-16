# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hrakad/lotide`

**Require it:**

`const _ = require('@hrakad/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `function1(assertArraysEqual(array1, array2))`: asserts if two arrays are equals
* `function2(assertEqual(value1, value2))`: asserts if two values are equals
* `function3(assertObjectsEqual(object1, object2))`: asserts if two objects are equals
* `function4(eqArrays(array1, array2))`: compares for equality between two arrays. 
* `function5(eqObjects(object1, object2))`: compares for equality between two objects.
* `function6(countLetters(string))`: returns the count of each letter within the string.
* `function7(countOnly(array, object))`: counts and returns occurrence of object within the array.
* `function8(findKey(object, callback))`: scans the object and return the first key for which the callback returns a truthy.
* `function9(findKeyByValue(object, objectValue))`: takes an obeject and returns the key of the object value.
* `function10(flatten(array))`: flattens an array of arrays into a single-level array
* `function11(head(array))`: returns the 1st element of an array
* `function12(letterPositions(string))`: returns all the indices/position of each character in the string
* `function13(map(array, callback))`: returns a new array with the applied callback on the original array
* `function14(middle(array))`: returns the middle element of an array
* `function15(tail(array))`: returns the entire array without the first element 'The Head'.
* `function16(takeUntil(array, callback))`: returns an array with elements upto the callback provided
* `function17(without(list, filter))`: returns a new array without the filter list

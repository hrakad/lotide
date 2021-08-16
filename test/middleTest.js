const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {

  it("return [3] for [1, 2, 3, 4, 5]", () => {
    const result = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(result, [3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    const result = middle([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3]);
  });

  it("returns [] for [1, 2]", () => {
    const result = middle([1, 2]);
    assert.deepEqual(result, []);
  });

});









// assertArraysEqual(middle([1, 2]),[]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [4]);
// assertArraysEqual(middle([1, 2, 3, 4]), [3]);
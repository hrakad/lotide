const assert = require('chai').assert
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'labs']  for ['Hello, 'Lighthouse', 'Labs']", () =>{
    const array = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(array), ["Lighthouse", "Labs"]); 
  });
  
  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
      const array = [1, 2, 3, 4, 5];
      assert.deepEqual(tail(array), [2, 3, 4, 5])
  });
});

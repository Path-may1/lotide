// const assertEqual = require('../assertEqual')
// const eqArrays = require('../eqArrays')
// const middleArrays = require ('../middle')


// assertEqual(eqArrays(middleArrays([]),[]),true);
// assertEqual(eqArrays(middleArrays([1,2]),[]),true);
// assertEqual(eqArrays(middleArrays([1,2,3,4]),[2,3]),false);
// assertEqual(eqArrays(middleArrays([1,2,3,4,5]),[3]), true);

const assert = require('chai').assert
const middleArrays = require ('../middle')

describe("#middle", () => {
  it("returns [] for []", () => {
   assert.deepEqual(middleArrays([]), []);
  });

  it("return [] for ['1, 2']", () => {
    assert.deepEqual(middleArrays ([1,2]),[])
  });

  it("return [2] for [1,2,3,4]", () => {
    assert.deepEqual(middleArrays ([1,2,3,4]),[2,3])
  });  
  
  it("return [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middleArrays ([1,2,3,4,5]),[3])
  });  
});
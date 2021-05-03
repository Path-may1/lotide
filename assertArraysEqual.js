const eqArrays = require('./eqArrays')
const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: 1 === 1");
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
}
  

assertArraysEqual(eqArrays([1,2,3], [1,2,3]), true);
assertArraysEqual(eqArrays([1,2,3], [3,2,1]), false);
module.exports = assertArraysEqual;
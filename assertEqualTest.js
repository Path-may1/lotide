const assertEqual = require("../assertEqual")
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  
  
  }
  };
assertEqual("lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
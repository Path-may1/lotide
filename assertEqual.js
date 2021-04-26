const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: 1 === 1");
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
    
 
  }
};
 
assertEqual("lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
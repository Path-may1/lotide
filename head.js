const head = function(actual, expected) {

  
  if (actual[0] = expected[0]) {

 console.log("✅✅✅ Assertion Passed: 1 === 1");
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
    
 
  }
};
 
(head([5,6,7], 5));
(head(["Hello", "Lighthouse", "Labs"], "Hello"));
const assertEqual = function(actual, expected) {
console.log(actual, expected)
  if (JSON.stringify(actual) === JSON.stringify(expected) ) {
    console.log("✅✅✅ Assertion Passed: 1 === 1");
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
    
 
  }
};

function countLetters(str) {
  results = {};
  

  for(letter of str){
   // console.log(letter)
    
      if(!results[letter]) {
        
        results[letter] = 1 
      } else {
       results[letter] += 1
      }
    
    } 
    console.log(results)
  return results

  }
  assertEqual(countLetters("LHL"),{"L":2, "H":1});

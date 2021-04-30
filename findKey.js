const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: 1 === 1");
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
}


const findKey = function(obj,callback){
for(let key in obj) {
 // console.log(obj[key])
 // callback(obj[key])
  if(callback(obj[key])){
   // console.log(key)
    return key;
  }
}



  }
  const results =findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"
  console.log(results)
  assertArraysEqual(findKey,x => x.stars === 2),"noma", true)

//output => "noma"
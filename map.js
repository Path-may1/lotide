const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: 1 === 1");
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
}

const eqArrays = function(arr1, arr2) {
  if(arr1.length != arr2.length) {
    return false;
  }
  else {
    let result = false;
    //comparing elements of array

  for( let i =0; i<arr1.length; i++){
    if(arr1[i] != arr2[i]) {
      return false;
    }
    else {
      result = true;
    }
    }
  return result
  }
}
const words = ["ground", "control", "to", "major", "tom"];
const callback = function(letters) {

 return letters[0]
}

const map = function(array, callback){
 const results = [];
for (let item of array) {
  results.push(callback(item));
}

return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(eqArrays(map(words,callback),['g', 'c', 't', 'm', 't']),true)

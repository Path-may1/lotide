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


// takeUntil function code
const takeUntil = function (array, callback) {
  // for loop to iterate each item  in array
  
  let returnArray = [];
  for (let item of array) {
    if (!callback(item)) {
      returnArray.push(item)
    } else {
      return returnArray;
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(eqArrays(takeUntil(data1,x => x < 0),[ 1, 2, 5, 7, 2 ]),true)
assertArraysEqual(eqArrays(takeUntil(data2,x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]),true)
const assertEqual = require('./assertEqual')

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

assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays([1,2,3], [3,2,1]), false);
module.exports = eqArrays;
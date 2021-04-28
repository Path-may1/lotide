const assertEqual = function(actual, expected) {
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
 const without = function(arr1, arr2) {
let newArray = [];
let result = false;
  for (let i =0; i< arr1.length; i++){
    if(arr1[i]!== arr2[i]){
        result = true;
      newArray += arr[i];
    } 
    else {
      result = false;
  }
  return result;
 }
assertEqual(without([1,2,3], [1]), true));
assertEqual(without([1,2,3], [1,2,"3"]), false)
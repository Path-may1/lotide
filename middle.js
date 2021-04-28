

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
    
    //comparing elements of array

  for( let i =0; i<arr1.length; i++){
    if(arr1[i] != arr2[i]) {
      return false;
    }
   
    }
  return true;
  }
}
const middleArrays = function (array) {
let midelement = array[Math.round((array.length - 1)/2)]
let newArray =[]; 
if(array.length <= 2) {
  return [];
} 
if(array.length %2 === 0) {
  newArray = [array[midelement-2],array[midelement -1 ]]
} else  {
  newArray = [array[midelement - 1]]
}
console.log(newArray)
 return newArray;
}

assertEqual(eqArrays(middleArrays([]),[]),true);
assertEqual(eqArrays(middleArrays([1,2]),[]),true);
assertEqual(eqArrays(middleArrays([1,2,3,4]),[2]),false);
assertEqual(eqArrays(middleArrays([1,2,3,4,5]),[3]), true);
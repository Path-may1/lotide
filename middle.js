      

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

// assertEqual(eqArrays(middleArrays([]),[]),true);
// assertEqual(eqArrays(middleArrays([1,2]),[]),true);
// assertEqual(eqArrays(middleArrays([1,2,3,4]),[2]),false);
// assertEqual(eqArrays(middleArrays([1,2,3,4,5]),[3]), true);

module.exports = middleArrays;
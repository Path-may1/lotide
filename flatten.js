const flatten = function(array) {

  let firstArray = [];
  
   for (let num of array) {
   // if(Array.isArray(num)) {
      if(typeof(num) === array) {
      for(let i = 0 ; i < num.length; i++) {
        firstArray.push(num)
      } 
    } else {
         firstArray.push(num)
      }
     
   }
  return firstArray
  }
  flatten([1, 2, [3, 4], 5, [6]])
  
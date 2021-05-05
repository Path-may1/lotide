
const tail = function (words) {
 
    let newArr = [];
    for (let i = 1; i < words.length; i++) {
      newArr.push(words[i]);
    }
    return newArr;
  };
  




module.exports = tail;
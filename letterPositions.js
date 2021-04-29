
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: 1 === 1");
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);


  }
};
// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }
//("lighthouse in the house")
const letterPositions = function (sentence) {

  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      // we do not want to add anything
    } else {

      console.log(sentence[i], i)
      results[sentence[i]] = [];
    }
  }

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      // we do not want to add anything
    } else {
      let labs = results[sentence[i]].concat([i]);
      results[sentence[i]] = labs
    }
    
  }
  return results;
}
let results = letterPositions("lighthouse in the house");
console.log(" position", results)

assertEqual(letterPositions("hello"), [1]);
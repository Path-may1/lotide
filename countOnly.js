const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: 1 === 1");
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
}
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count


const firstNames = [
  "Karl",
  "Salima",
  "Jason",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// {

//}
// (nameMatch > firstNames)
// }

const countOnly = function(names, itemsToCount) {
  const results = {}
  for(let name of names) {
    if(itemsToCount[name]) {
      if(!results[name]) {
        results[name] = 1 
      } else {
        results[name] += 1
      }
    }
  }
  console.log(results)
  return results
}

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result["Jason"], 2);
assertEqual(result["Karima"], undefined);
assertEqual(result["Fang"], 2);
assertEqual(result["Agouhanna"], undefined);

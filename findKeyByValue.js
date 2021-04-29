
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: 1 === 1");
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);


  }

  function findKeyByValue(object, value) {
    for (let key in object)
      if (object[key] === value) return key;
    return "undefined";
  }
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };
  findKeyByValue(bestTVShowsByGenre, "The Wire")
  //assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  //assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined))
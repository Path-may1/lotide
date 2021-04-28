
const words =  ["Yo Yo", "Lighthouse", "Labs"];
  const assertEqual =  function(words,expected){
    let newWords = words.slice(1);  
  if (newWords.length === expected) {
    console.log("✅✅✅ Assertion Passed: ");
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${newWords} !== ${expected}`);
    
 
  }
};
 
assertEqual(word.length, 3);

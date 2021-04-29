const raisinAlarm = function(cookie) {
  let result = ""
  // for (let i = 0; i < (cookie.length); i++) {
    for (let element of cookie) {
    if (element === "🍇") {
    return "Raisin alert!"
      } 
  }
  return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// Raisin alert!
// Raisin alert!
// All good!
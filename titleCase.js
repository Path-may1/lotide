const titleCase = function(input) {
  if(input.length === 0){
    return ""
  } 
  let titleCase = "";
  let firstLetter = input[0].toUpperCase()  
  for(let i = 1; i < input.length; i++){
    if(input[i] === ' '){
      i++;
      titleCase += ' ' + input[i].toUpperCase();
    } else {
      titleCase += "" + input[i].toLowerCase();
    }
  }
  let answer = firstLetter + titleCase
  return(answer)
}

 titleCase("this is a string");
 titleCase("test") //should return "Test"
titleCase("i r cool")//should return "I R Cool"
 titleCase("WHAT HAPPENS HERE") //should return "What Happens Here"
 titleCase("") //should return ""
 titleCase("A")
 titleCase("AB")




const titleCase = function(input) {
  if(input.length === 0){
    console.log(""); 
    return
   } 
  let titleCase = "";
  let firstLetter = input[0].toUpperCase()  
  for(let i =1; i< input.length; i++){
    if(input[i] === ' '){
      i++;
      titleCase += ' ' +input[i].toUpperCase();
    } else {
        titleCase += ""+input[i].toLowerCase();
    }
  }
  let answer = firstLetter + titleCase
   //return answer
   console.log(answer)
}

 titleCase("this is a string");
 titleCase("test") //should return "Test"
titleCase("i r cool")//should return "I R Cool"
 titleCase("WHAT HAPPENS HERE") //should return "What Happens Here"
 titleCase("") //should return ""
 titleCase("A")




// const titleCase = function (input) { 

//     let titleCase = "";
      
//   if(input.length == 0){
  
//     return " ";  
//   }
//    for(let i = 0; i < input.length; i++){
//     if(input[i]=== input[0]){
//       titleCase += input[i].toUpperCase();
//     console.log(titleCase)
//     }
//     else if(input[i] === ' '){
//       i++;
//       titleCase += ' ' + input[i].toUpperCase();
//     } else {
//         titleCase += "" + input[i].toLowerCase();
      
//     }

//   }
// let answer = titleCase;

// return answer
// }

//  titleCase("this is a string",);
//  titleCase("")
// titleCase("i r good")
//  titleCase("THIS IS A STRING")
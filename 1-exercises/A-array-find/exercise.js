/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];
//names.subString[0]==="A"
// console.log(names[i].substring(0,1))

function findLongNameThatStartsWithA (nameOfPerson){
   if (nameOfPerson.length >7 && nameOfPerson.substring(0,1)){
     return nameOfPerson
   } 
}


// function isLongName(elementOfArr) {
//   return elementOfArr.length > 7;
// }
var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);


//var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

//var searchForName = names.find(findLongNameThatStartsWithA) 

console.log(longNameThatStartsWithA);
//console.log(searchForName)
/* EXPECTED OUTPUT */
// "Alexandra"

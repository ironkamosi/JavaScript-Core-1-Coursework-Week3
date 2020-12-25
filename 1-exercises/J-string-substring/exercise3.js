/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let result = "";

statement = statement.substring(0,5).concat(statement.substring(9,statement.length))

console.log(statement)
/*
convert string into array
enter the elements in the array
use the slice method to remove the word
create a new variable and transfer the contents from old variable
return result
*/

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/

/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")

Passwords must not be any previous password in the passwords array. 

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/


/* 
create a function 
  create a new  variable  
      for loop
        if , else if, else
          return true, return false boolean 
              push the return value to the previous variable container 
                return value




*/
function validatePasswords(passwords) {
  let acceptedPasswords = []
  for (i = 0; i < passwords.length; i++) {
    let password2 = passwords[i];
    //console.log("password is",password2)   
    let password = password2.split("");
    if (password.length >= 5 && password.some(char => a.includes(char)) && password.some(char => b.includes(char)) &&
      password.some(char => c.includes(char)) && password.some(char => d.includes(char)) && passwords.indexOf(password2) === i)
       {
      console.log(password, password2)
      acceptedPasswords.push(true); 
    }else {
      acceptedPasswords.push(false);
    }
  }
  return acceptedPasswords;
} 
/*
      passwords.indexOf(password2) === i

&& if !(passwords.includes(password){
  
}

 */

const a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
          "m", "n", "o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z"]
  
const b = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
          "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
           
const c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const d = ["!", "#", "$", "%", ".", "*", "&"]







/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "validatePasswords function works - case 1",
  validatePasswords(passwords1),
  [false, false, true, false, false]
 );

test(
  "validatePasswords function works - case 2",
  validatePasswords(passwords2),
  [true, true, false, false, false]
);

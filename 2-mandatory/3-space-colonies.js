/*
  The voyagers decide that they quite like this planet, and some of them want to settle there and colonise it.

  They call the planet "Alpha" and they decide that the FAMILIES whose last names start with 'A' should stay,
  while the others go on in search of other planets to call home.

  Create a function that returns an array of colonisers that will stay, according to the above rules.

  NOTE: don't include any element that is not a "family".

  HINT: Whenever you read the above the instructions, try to come up with the main input and output and logic
        Input: Is an array
        Output: Is an array
        Logic: Only strings that start with A, and finish with family
  
*/

/*
function finalResultCall(element) {
 // console.log(element);
  if (Array.isArray(element) && element.length === 2) {
    return true;
  } else {
    return false;
  }
}
*/
function colonisers(arrLastName) { 
  let acceptedVoyagers = [];
  for (let i = 0; i < voyagers.length; i++) {
    if (voyagers[i][0] === "A" && voyagers[i].includes("family")) {  
      acceptedVoyagers.push(voyagers[i]);
    }
  } return acceptedVoyagers;
 
}  

/*  
loop the array
create 2 conditions - 1 first element of the string with "A", 2 - include "family"
create an array outside of the loop
if it passes both conditions  push to array
strings are arrays of characters
variables have to be declared before the code is executed 
*/
/* ======= TESTS - DO NOT MODIFY ===== */

const voyagers = [
  "Adam family",
  "Potter family",
  "Eric",
  "Aldous",
  "Button family",
  "Jude",
  "Carmichael",
  "Bunny",
  "Asimov",
  "Oscar family",
  "Avery family",
  "Archer family",
];

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (util.isDeepStrictEqual(actual, expected)) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("colonisers function works", colonisers(voyagers), [
  "Adam family",
  "Avery family",
  "Archer family",
]);

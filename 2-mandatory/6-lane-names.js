/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/

/* semi-pseudo code*
                           
create a function with a single parameter (variable)
  create an if condition with the variable and use the indexOf method
    return variable


*/




function getLanes(arrayOfData) {
  return arrayOfData.filter(streetFinder);
//   let newStreetName = [];
//   for (let i = 0; i < arrayOfData.length;i++)
//    //for (let j = 1; j < arrayOfData.length;j++)
//     if (arrayOfData.indexOf() && arrayOfData.filter(streetFinder)) {  
//       arrayOfData = arrayOfData[i];
//       return 
//     }
 } 


function streetFinder(streetName) {
 return streetName.includes("Lane"); 
}


/*

function colonisers(arrLastName) { 
  let acceptedVoyagers = [];
  for (let i = 0; i < voyagers.length; i++) {
    if (voyagers[i][0] === "A" && voyagers[i].includes("family")) {  
      acceptedVoyagers.push(voyagers[i]);
    }
  } return acceptedVoyagers;
 
}  
*/




/* ======= TESTS - DO NOT MODIFY ===== */

const streetNames = [
  "Abchurch Lane",
  "Adam's Court",
  "Addle Hill",
  "Addle Lane",
  "Alban Highwalk",
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

test("getLanes function works", getLanes(streetNames), [
  "Abchurch Lane",
  "Addle Lane",
]);

/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/

/*
semi-pseudo code: activity 4

 declare one variable in the argument - (arrayOfStudentData)
  create a variable (let acceptedStudents) and empty array 
    create a loop that goes inside the elements inside of the array, starting with the index [0] (consider using 2 dimensional array)
      create a if condition: if (numberOfClasses =>8) return true/ else return false 
        Use the variable from the first line of the function and push the result to the array using the variables i and j
           if needed create a console log
              if the function does not work review the variables
                (optional) use the debugger to see how the function works

*/




function eligibleStudents(arrayOfStudentData) {
  arrayOfStudentData = arrayOfStudentData.filter(filterNumbers)
    let  acceptedStudents = arrayOfStudentData.map(element => element[0])
  return acceptedStudents;
}

function filterNumbers(elementOfArray) {
  if (elementOfArray[1] >= 8) {
    return true;
  } else {
    return false;
  }
}


//const result = words.filter(word => word.length > 6);

/* ======= TESTS - DO NOT MODIFY ===== */

const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]

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

test("eligibleStudents function works",
  eligibleStudents(attendances),
  ["Ahmed", "Clement", "Tayoa", "Nina"]
);

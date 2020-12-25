/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

var groupIsOnlyStudents; // complete this statement

function mixedStudentAndGroupArr(students, group) {
  if (groupIsOnlyStudents) {
    console.log("The group contains only students");
  } else {
    console.log("The group does not contain only students");
  }
}

let mixedGroup = students.every(mixedStudentAndGroupArr);
console.log(mixedGroup);
/* EXPECTED RESULT */

// The group does not contain only students

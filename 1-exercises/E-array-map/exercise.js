// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// example 1 - Full function 
function multipleBy100(number) {
  return number * 100
}

var numberMultipliedBy100 = numbers.map(multipleBy100) 

console.log(numberMultipliedBy100)
// result Array(5) [ 10, 20, 30, 40, 50 ]



// example 2- Short version function i
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var numberMultipliedBy100 = numbers.map(function multipleBy100(number) { 
  return number * 100;
  
})
console.log(numberMultipliedBy100)
// result Array(5) [ 10, 20, 30, 40, 50 ]




// example 3 - Shorter version function ii
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var numberMultipliedBy100 = numbers.map(number => { 
  return number * 100;
  
});
console.log(numberMultipliedBy100)

// result Array(5) [ 10, 20, 30, 40, 50 ]



// example 4 - Shorter version function iii
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var numberMultipliedBy100 = numbers.map(number => number * 100)

console.log(numberMultipliedBy100)
// result Array(5) [ 10, 20, 30, 40, 50 ]

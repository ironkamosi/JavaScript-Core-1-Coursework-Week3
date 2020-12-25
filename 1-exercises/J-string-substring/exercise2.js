/* 
  You are given an array with a list of names.

  You should log only the peoples first names.

  For example, if the name is "John Smith" you should return "John"
*/

let names = [
  "Tamzin Lindsay",
  "Jessica Tate",
  "Tony Holcomb",
  "Shae Patton",
  "Arron Graham",
];
//let namePatryk = "Patryk"
//console.log(namePatryk.indexOf("t"))


//names[0] = names[0].substring(0, names[0].indexOf(" "));
/*
enter the array
select the element 
slice [0] up until the space
return
*/
names[0] = names[0].substring(0, names[0].indexOf(" "));
names[1] = names[1].substring(0, names[1].indexOf(" "));
names[2] = names[2].substring(0, names[2].indexOf(" "));
names[3] = names[3].substring(0, names[3].indexOf(" "));
names[4] = names[4].substring(0, names[4].indexOf(" "));

names.forEach((name) => {
  console.log(name);
});

//console.log(names) Array 

/* EXPECTED OUTPUT 

  "Tamzin"
  "Jessica"
  "Tony"
  "Shae"
  "Arron"
  
*/

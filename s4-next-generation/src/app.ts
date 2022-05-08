// Code goes here!

const userName = "kev";

let age = 31;

age = 32;

// function add(a: number, b: number) {
//   var result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   var isOld = true; //scope only in functions
// }
// console.log(isOld);

const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(2, 3));

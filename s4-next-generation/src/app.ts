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

const add = (a: number, b: number = 1) => a + b;

console.log(add(2, 3));

const printOutput: (a: number | string) => void = (output) => console.log(output);

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}

printOutput(add(5));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["hiking", ...hobbies];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  name: "kev",
  age: 32,
};

const copiedPerson = { ...person };

console.log(copiedPerson);

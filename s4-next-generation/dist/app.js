"use strict";
const userName = "kev";
let age = 31;
age = 32;
const add = (a, b = 1) => a + b;
console.log(add(2, 3));
const printOutput = (output) => console.log(output);
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
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
//# sourceMappingURL=app.js.map
"use strict";
const userName = "kev";
let age = 31;
age = 32;
const add = (a, b) => a + b;
console.log(add(2, 3));
const printOutput = (output) => console.log(output);
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => {
        console.log(event);
    });
}
printOutput(add(5, 2));
//# sourceMappingURL=app.js.map
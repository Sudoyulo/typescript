// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "max",
//   age: 30
// }
//dont do this

const person = {
  name: "max",
  age: 30,
  hobbies: ["sports", "cooking"]
}

let favAct: string[];
favAct = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.map());
}
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
  hobbies: ["spots", "cooking"]
}

let favAct: any[]; //waste of ts
favAct = ["sports", 1];

console.log(person.name);
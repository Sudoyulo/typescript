// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "max",
//   age: 30
// hobbies: string[]
// role: [number, string] //tuple declaration
// }
//do this for tuples.

const person: {
  name: "max";
  age: 30;
  hobbies: string[];
  role: [number, string]; //tuple declaration
} = {
  name: "max",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "author"], //tuple
};

// person.role.push("admin"); //ts cant catch push
// person.role[1] = 10; //ts can catch change
// person.role = [0, "admin", "user"]; //triple doesnt work

let favAct: string[];
favAct = ["sports"];

console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.map());
// }

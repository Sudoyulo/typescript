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

// const person: {
//   name: "max";
//   age: 30;
//   hobbies: string[];
//   role: [number, string]; //tuple declaration
// } = {
//   name: "max",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"], //tuple
// };

// const ADMIN = 0; //normal way
// const READ_ONLY = 1;

enum Role {
  ADMIN = 5, //5
  READ_ONLY, //6
  AUTHOR, //7
} //custom enum 0,1,2

const person = {
  name: "max",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin"); //ts cant catch push
// person.role[1] = 10; //ts can catch change
// person.role = [0, "admin", "user"]; //triple doesnt work

let favAct: string[];
favAct = ["sports"];

console.log(person.role); //role prints 5

// for (const hobby of person.hobbies) {
//   console.log(hobby.map());
// }

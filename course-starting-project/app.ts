function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  //void return type
  console.log("Result:" + num);
}

printResult(add(5, 12));

let combinedValues: Function;

combinedValues = add; //stored a pointer to a function
combinedValues = 5;

console.log(combinedValues(8, 8));

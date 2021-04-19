const add = (n1: number, n2: number) => {
   return n1 + n2;
};

// TS will infer  it will return a void
const printResult = (num: number): void => {
   console.log("Result: " + num);
};

const addAndHandler = () => {};

// This is how to create a function type
// This says "ensure the function returns a number and accept 2 paraters where they are numbers"
let combineValues: (a: number, b: number) => number;
combineValues = add;
combineValues = printResult;

console.log(combineValues(5, 5)); // expect 10
console.log(combineValues(15)); // an error because it needs 2 parameters

/*
-------------------------------
    Numbers
-------------------------------
*/
const add = (n1: number, n2: number) => {
   // Can improve the code by adding a conditional
   if (typeof n1 === "number" && typeof n2 === "number") {
      return n1 + n2;
   } else {
      throw new Error("Incorrect type!");
   }
};

const number1 = 3;
const number2 = 2;
const result = add(number1, number2);

// Type Inference
// let number: number;
// number = '5'
// console.log(typeof number)

/*
-------------------------------
    Objects
-------------------------------
*/
const user: {
   name: string;
   age: number;
   role: string;
} = {
   name: "Vincent",
   age: 25,
   role: "Front-end Developer",
};
// Doesnt create a new object but it's a specialized object type and provide the structural information
// Stripped out ot JS code
// Telling it it's some object

/*
-------------------------------
    Arrays
-------------------------------
*/

let myArray1: string[]; // For an array with strings
let myArray2: any[]; // For any (try not to use because you're giving up TS)

myArray1 = ["Apple", "Banana", "Orange", "Mango"];

for (const fruits of myArray1) {
}

/*
-------------------------------
    Tuple
-------------------------------
*/
// Tuple always has 2 values: 1. a numeric identifier 2: a string identifier
const role: [number, string] = [2, "Web Developer"];

role.push("Web Designer"); // is an exception

// will yield an error because wrong value
// role[1] = 5

/*
-------------------------------
    Enum
-------------------------------
*/

// A good example are global variables eg.
// const ADMIN = 0;
// const WEB_DEVELOPER = 1;
// const WEB_DESIGNER = 2
// const UX_DESIGNER = 3

// Using Enums
// Naming convention is first letter uppercase
enum Role {
   ADMIN,
   WEB_DEVELOPER,
   WEB_DESIGER,
   UX_DESIGER,
}
console.log(Role.ADMIN + " is ADMIN"); // expected output 0
console.log(Role.WEB_DEVELOPER + " is WEB DEVELOPER"); // expected output 1
console.log(Role.UX_DESIGER + " is UX DESIGNER"); // expected output 3

/*
-------------------------------
    Union
-------------------------------
*/
// const combine = (input1: number, input2: number) => {
//     const result = input1 + input2
//     return result
// }

// Make union type more flexible by adding conditions
const combine = (input1: Adder, input2: Adder, resultConversion: AdderResultType) => {
   let result;

   if (
      (typeof input1 === "number" && typeof input2 === "number") ||
      resultConversion === "as-number"
   ) {
      result = +input1 + +input2;
   } else {
      result = input1.toString() + input2.toString();
   }

   // Checks that the third parameter is a number otherwise it will be converted to a string
   if (resultConversion === "as-number") {
      return +result;
   } else {
      return result.toString();
   }
   return result;
};

// Call them
const combineAges = combine(10, 10, "as-number");
const combineNames = combine("Vincent", "Casilla", "as-text");

console.log(combineAges); // expect 10
console.log(combineNames); // expect an VincentCasilla

/*
-------------------------------
    Type Alias
-------------------------------
*/
type Adder = number | string;
type AdderResultType = "as-number" | "as-text";

# TypeScript

### My notes for learning TypeScript
For Educational Purposes Only

---

## _Overview_

-  JavaScript and NodeJS can't execute TypeScript
-  Pre-compiler that gets compiled to JavaScript
-  It adds types to JavaScript language to help identify errors in code before runtime
-  Makes our data more explicit and prevent errors
-  Backwards compatible because they
-  Makes runtime more efficient
   -JavaScript uses "dynamic types" resolved at runtime
-  TypeScript uses "static types" set during development

## _Concepts_

1. Decorators
1. Rich Configuration Options
1. Classes & Interfaces
1. Generators

> An example of when TS comes in handy

```javascript
// When running this fn it will concatenate the strings
function addNumber(num1, num2) {
   return num1 + num2;
}
console.log(addNumber("1", "3")); // without TS you would need to write an if statement to check if it's a string or number
```

> You would have to re-write this fn as ...

```javascript
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const button = document.querySelector("button.add-btn");

// When clicked it will add the 2 inputs together
button.addEventListener("click", () => {
   alert(add(input1.value, input2.value));
});
function add(num1, num2) {
   if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 + num2;
   } else {
      return +num1 + +num2;
   }
}
```

> Use tsc location_of_filename.ts to compile the TypeScript file

```
$ tsc app.ts
```

Adding TS to parameters ...

```typescript
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const button = document.querySelector("button.add-btn");

// When clicked it will add the 2 inputs together
button.addEventListener("click", () => {
   alert(add(+input1.value, +input2.value));
   // The + will change the string into a number
});

// ___: number specifies the type of value the parameters are
function add(num1: number, num2: number) {
   return num1 + num2;
}
```

---

## How to start a Development Server

Fill out the necessary information

```
$ npm init
```

Save the dependency

```
$ npm --save-dev lite-server
```

Start the server

```
$ npm start
```

---

## **_Core Types_**

---

1. Number - 1, 2, 3
1. String - "1", "2", "Apple"
1. Boolean - true/false, === or !==
1. Objects - const object = {} = {}
1. Arrays - strings, numbers, any, boolean, objects
1. Tuple (This doesnt exist in Vanilla Javascript)
1. Enum - adds numeric identifier to a human readable identifier
1. Any - makes it any type

This will convert number 2 into a string (expected output = 52)
<br markdown='1'>
<br markdown='1'>
<br markdown='1'>

---

### **Number Type**

---

```javascript
const add = (n1, n2) => {
   return n1 + n2;
};

const number1 = "5";
const number2 = 2;
const result = add(number1, number2);
console.log(result);
```

> Remember it doesnt change runtime code! It will point to the mistake before compiling.

```javascript
// Use this to check the value type
console.log(typeof variable);
```

---

### **_Type Inference_**

---

TS does it's best to understand what types you have attached to variable and constant

> This will cause an error because it's infering that the variable will have a number attached to it

```typescript
// Type Inference
let number: number;
number = "5";
console.log(typeof number);
```

---

### **Object Type**

---

```typescript
// This will yield errors because it needs to be more specific
const user: object = {
    name: "Vincent"
    age: 25
    role: "Front-end Developer"
}
```

Add curly brackets

```typescript
const user: { fill information here } = {
    name: "Vincent"
    age: 25
    role: "Front-end Developer"
}
// Doesnt create a new object but it's a specialized object type and provide the structural information
// Stripped out ot JS code
// Telling it it's some object
```

> Using objects in TS

```typescript
const user: {
   name: string;
   age: number;
   role: string;
} = {
   name: "Vincent",
   age: 25,
   role: "Front-end Developer",
};
```

---

### **Arrays Type**

---

> Try not to use any[] as it takes away everyting TS offers

```typescript
let myArray1: string[]; // For an array with strings
let myArray2: any[]; // For any (try not to use because you're giving up TS)

myArray1 = ["Apple", "Banana", "Orange", "Mango"];
console.log(myArray1);

// Will iterate through an object (similar to forEach)
for (const fruits of myArray1) {
   alert(fruits);
}
```

---

### **Tuple Type**

---

> Fixed length and fixed type array ==> only 2 items

```javascript
/*
-------------------------------
    Tuple
-------------------------------
*/
// Tuple always has 2 values: 1. a numeric identifier 2: a string identifier
const role = [2, "Web Developer"];
console.log(role);

role.push("Web Designer"); // is an exception
// will yield an error because wrong value
// role[1] = 5
```

#### Why? -> Make it more strict

---

### **Enum Type**

---

> Enumerated list starting from 0

```javascript
// A good example are global variables eg.
const ADMIN = 0;
const WEB_DEVELOPER = 1;
const WEB_DESIGNER = 2;
const UX_DESIGNER = 3;
```

> Enums assigns labels to numbers

```typescript
// Using Enums
// Naming convention is first letter uppercase

enum Role {
   ADMIN,
   WEB_DEVELOPER,
   WEB_DESIGER,
   UX_DESIGER,
}

console.log(Role.ADMIN); // expected output 0
console.log(Role.WEB_DEVELOPER); // expected output 1
console.log(Role.UX_DESIGER); // expected output 3
```

> Can make label start at another number by using

```typescript
enum Role = { ADMIN = 5, ....}
```

> \*\*\* This will start at 5 then count up

---

### **Union Type**

---

> Can accept different types of values
> The function will only accept a number

```typescript
const combine = (input1: number, input2: number) => {
   const result = input1 + input2;
   return result;
};

const combineAges = combine(20, 25);
console.log(combineAges); // expect 45

const combineNames = combine("Vincent", "Casilla");
console.log(combineNames); // expect an error
```

With Union Type you can use multiple types

```typescript
const combine = (input1: number | string, input2: number | string) => {
   const result = input1 + input2;
   return result;
};

const combineAges = combine(20, 25);
console.log(combineAges); // expect 45

const combineNames = combine("Vincent", "Casilla");
console.log(combineNames); // expect an VincentCasilla
```

---

### **Literal Types**

---

> When you have a specific number eg. 3 is a number but 3.5 is a specific type of number

An example of using a Literal Type is to add a third parameter for converting the input to either a string or a number

```typescript
const combine = (input1: number | string, input2: number | string, resultConversion: string) => {
   let result;

   if (typeof input1 === "number" && typeof input2 === "number") {
      result = input1 + input2;
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
```

Adding the Union Type with the Literal Type

```typescript
const combine = (
   input1: number | string,
   input2: number | string,
   resultConversion: "as-number" | "as-text"
) => {
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

console.log(combineAges); // expect 20
console.log(combineNames); // expect an VincentCasilla
```

---

### **Type Alias**

---

```typescript
/*
-------------------------------
    Type Alias
-------------------------------
*/
type Adder = number | string;
type AdderResultType = "as-number" | "as-text";
// Replace values where type is needed
```

---

<br markdown='1'>
<br markdown='1'>

# Function Return Types and Voids

> When you hover on the function, TS will infer what type will be returned

```typescript
const add = (n1: number, n2: number) => {
   return n1 + n2;
};

// TS will infer  it will return a void
// It's not returning anything
const printResult = (num: number) => {
   console.log("Result: " + num);
};
```

Will return "void" not native to JS

### What is Void?

---

-  This function doesnt have a return statement or doesnt return anything. It doesn't yield any errors
-  Void is the standard practice
-  undefined also works (a valid type) but rarely used

```typescript
// TS will infer  it will return a void
const printResult = (num: number): void => {
   console.log("Result: " + num);
};
```

---

### **Function Type**

---

> combineValues points to add function so you are able to call combineValues(2, 2) which is the same as add(2, 2)

```typescript
const add = (n1: number, n2: number) => {
   return n1 + n2;
};

// TS will infer  it will return a void
const printResult = (num: number): void => {
   console.log("Result: " + num);
};

let combineValues;
combineValues = add;
console.log(combineValues(2, 2));
// This works because combineValues is pointing to the function (this is Vanilla Javascript)
```

> The Basics of Function Types

```typescript
// Make it clear that what is stored here is a function
let combineValues: Function;
combineValues = add;
combineValues = printResult;
console.log(combineValues(5, 5));
```

> How to write a Function Type

```typescript
const add = (n1: number, n2: number) => {
   return n1 + n2;
};

// TS will infer  it will return a void
const printResult = (num: number): void => {
   console.log("Result: " + num);
};

// This is how to create a function type
// This says "ensure the function returns a number and accept 2 paraters where they are numbers"
let combineValues: (a: number, b: number) => number;
combineValues = add;
combineValues = printResult;

console.log(combineValues(5, 5)); // expect 10
console.log(combineValues(15)); // an error because it needs 2 parameters
```

<aside markdown="1">
<p style="padding: 10px; background: #292D3F; text-align: center;color: white; font-weight: bold; font-size: 1.5em">More Info coming</p>
</aside>

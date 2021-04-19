var add = function (n1, n2) {
    return n1 + n2;
};
// TS will infer  it will return a void
var printResult = function (num) {
    console.log("Result: " + num);
};
// This is how to create a function type
// This says "ensure the function returns a number and accept 2 paraters where they are numbers"
var combineValues;
combineValues = add;
combineValues = printResult;
console.log(combineValues(5, 5)); // expect 10
console.log(combineValues(15));

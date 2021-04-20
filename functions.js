"use strict";
var add = function (n1, n2) {
    return n1 + n2;
};
// TS will infer  it will return a void
var printResult = function (num) {
    console.log("Result: " + num);
};
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
addAndHandle(10, 20, function (result) {
    console.log(result);
});

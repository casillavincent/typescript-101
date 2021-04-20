"use strict";
/*
--------------------------------
      Unknown
--------------------------------
*/
var myName;
var firstName;
/*
--------------------------------
      Never
--------------------------------
*/
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError("Error Occured", 600);

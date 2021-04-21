"use strict";
/*
--------------------------------
      Unknown
--------------------------------
*/
let myName;
let firstName;
/*
--------------------------------
      Never
--------------------------------
*/
const generateError = (message, code) => {
    throw { message: message, errorCode: code };
};
generateError("Error Occured", 600);

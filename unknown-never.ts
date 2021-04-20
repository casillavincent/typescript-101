/*
--------------------------------
      Unknown
--------------------------------
*/
let myName: unknown;
let firstName: string;

/*
--------------------------------
      Never
--------------------------------
*/

const generateError = (message: string, code: number) => {
   throw { message: message, errorCode: code };
};
generateError("Error Occured", 600);

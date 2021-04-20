const add = (n1: number, n2: number) => {
   return n1 + n2;
};

// TS will infer  it will return a void
const printResult = (num: number): void => {
   console.log("Result: " + num);
};

const addAndHandle = (n1: number, n2: number, cb: (n3: number) => void) => {
   const result = n1 + n2;
   cb(result);
};

addAndHandle(10, 20, (result) => {
   console.log(result);
});



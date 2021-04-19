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


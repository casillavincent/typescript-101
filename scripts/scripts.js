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

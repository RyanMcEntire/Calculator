const add = function (a, b) {
  sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  difference = a - b;
  return difference;
};

const multiply = function (a, b) {
  product = a * b;
  return product;
};

const divide = function (a, b) {
  quotient = a / b;
  return quotient;
};

const operate = function (a, op, b) {
  total = 0;
  switch (op) {
    case "+":
      total = add(a, b);
      break;
  }
  switch (op) {
    case "-":
      total = subtract(a, b);
      break;
  }
  switch (op) {
    case "x":
      total = multiply(a, b);
      break;
  }
  switch (op) {
    case "/":
      total = divide(a, b);
      break;
  }

  return total;
};

let computeArray = [];
let a = 0;
let b = 0;
let op;

let displayValue;
const displayScreen = document.querySelector("#numberDisplay");
displayScreen.textContent = "0";

const buttonPress = document.getElementById("buttonArea");
buttonPress.addEventListener("click", (e) => {
  let displayValue = e.target.value;
  computeArray.push(displayValue);
  let computeJoined = computeArray.join("");
  displayScreen.textContent = computeJoined;
  if (e.target.id === "operator") {
    op = e.target.value;
    le = computeArray.length - 1;
    let aArray = computeArray.splice(0, le);
    a = aArray.join("");
    computeArray.length = 0;
  }
  if (e.target.value === "=") {
    le = computeArray.length - 1;
    let bArray = computeArray.splice(0, le);
    b = bArray.join("");
    c = operate(+a, op, +b);
    a = c;
    displayScreen.textContent = c;
    computeArray.length = 0;

    console.log(c);
  }
  console.log(a, b);
  console.log(displayScreen.textContent);
  console.log(computeArray);
});

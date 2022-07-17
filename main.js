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
let a;
let b;
let c;
let op;
let equals;
let displayValue;
const displayScreen = document.querySelector("#numberDisplay");
displayScreen.textContent = "0";
const decimalButton = document.getElementById("decimal")
const buttonPress = document.getElementById("buttonArea");

if (computeArray.includes(".")) {

}
buttonPress.addEventListener("click", (e) => {
  if (computeArray.includes(".")) {
    if (e.target.value === ".") {
    return;
    }
  }
  if (e.target.value === "c") {
    op = undefined;
    a = undefined;
    b = undefined;
    c = undefined;
    displayScreen.textContent = 0;
    computeArray.length = 0;
    equals = false;
    return;
  }
  if (
    e.target.id !== "operator" &&
    e.target.id !== "number" &&
    e.target.id !== "equality"
  ) {
    return;
  }
  let displayValue = e.target.value;
  if (e.target.id === "number") {
    equals = false;
    if (computeArray.length > 11) {
      return;
    }
  }

  computeArray.push(displayValue);
  let computeJoined = computeArray.join("");
  displayScreen.textContent = computeJoined;

  if (e.target.id === "operator") {
    if (a !== undefined) {
      le = computeArray.length - 1;
      if (computeArray.length === 0) {
        op = e.target.value;
        return;
      }
      if (equals === true) {
        op = e.target.value;
        a = c;
        computeArray.length = 0;
        displayScreen.textContent = a;
        return;
      }
      let bArray = computeArray.splice(0, le);
      b = bArray.join("");
      c = operate(+a, op, +b);
      op = e.target.value;
      a = c;
      b = undefined;
      equals = false;
      displayScreen.textContent = c;
      computeArray.length = 0;
      return;
    }

    op = e.target.value;
    le = computeArray.length - 1;
    let aArray = computeArray.splice(0, le);
    a = aArray.join("");
    computeArray.length = 0;
  }
  if (e.target.value === "=") {
    le = computeArray.length - 1;
    if (computeArray.length === 0) {
      return;
    }
    let bArray = computeArray.splice(0, le);
    b = bArray.join("");
    c = operate(+a, op, +b);
    op = undefined;
    if (c.length > 12) {
      displayScreen.textContent = "huge number";
      a = 0;
      computeArray.length = 0;
      b = undefined;
      op = undefined;

      return;
    }

    a = c;
    b = undefined;
    op = undefined;
    displayScreen.textContent = a;
    computeArray.length = 0;
    equals = true;
    return;
  }

  console.log(a, b, c);
  console.log(op);
  console.log(displayScreen.textContent);
  console.log(computeArray);
  console.log(computeArray.includes("."));
});

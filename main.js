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
    case "*":
      total = multiply(a, b);
      break;
  }
  switch (op) {
    case "/":
      total = divide(a, b);
      break;
  }

  console.log(total);
};

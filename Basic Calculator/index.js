const calculation = (n1, n2, op) => {
  let calci;
  if (op == "-") {
    calci = n1 - n2;
  } else if (op == "+") {
    calci = n1 + n2;
  } else if (op == "*") {
    calci = n1 * n2;
  } else if (op == "/") {
    calci = n1 / n2;
  } else if (op == "%") {
    calci = n1 % n2;
  }

  return calci;
};

let result = calculation(15, 16, "*");

console.log(result);

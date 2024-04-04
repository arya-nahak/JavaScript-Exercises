const reverseOrder = (str) => {
  return str.split("").reverse().join("");
};

let result = reverseOrder("hello $ world");
console.log(result);

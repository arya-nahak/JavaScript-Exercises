const Prime_number_checker = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

let num = 6;
let result = Prime_number_checker(num);

if (result) {
  console.log(num + " is a prime number");
} else {
  console.log(num + " is not a prime number");
}
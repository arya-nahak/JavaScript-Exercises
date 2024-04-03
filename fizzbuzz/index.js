// Create 1 to 100 numbers
const numbers = Array.from({length: 100}, (_, i) => i + 1);

numbers.forEach(number=>{
    if(number % 15 === 0){
        console.log("FizzBuzz")
    }else if(number % 3 === 0){
        console.log("Fizz")
    }else if(number % 5 === 0){
        console.log("Buzz")
    }else{
        console.log(number)
    }
})
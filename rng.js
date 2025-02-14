function generateRandomNumber() {
    let randomNum = Math.floor (Math.random()* 10) + 1;
    console.log("Your number is:", randomNum);
}
generateRandomNumber();


function getRandomNumber (min,max) {
    let range = max-min;
    let randomNumber = Math.floor(math.random()* range) + min;
    return randomNumber;
}
let number1 = getRandomNumber(1,2);
console.log("Your number is:", number1)
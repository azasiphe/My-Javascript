

// A. TASK 1:VARIABLES and OPERATORS


let language = "JavaScript" ;
console.log(language)
let score = 10 ;
console.log(score)

let length = 10 ;
let width = 5;
let area = length* width ;
 console.log( 'The area of rectangle is ${length*width}')

let num1 = 10;
let num2 = 3;
let remainder = num1%num2 ;
console.log('The remainder when num1 is divided by num2 ${num1%num2}')


console.log(`num1 / num2 = ${Math.floor(num1 / num2)} remainder ${num1%num2}`)

// B. Task 2:Data Types


let integer = 20;
let decimal = 8.5;

let string = " MOLO,BEAUTIFUL";

let array = [1,2,3];
let object =  { key1: 'value1',key2: 'value2',key3: 'value3',key4: 'value4'}

console.log(integer);
console.log(decimal);
console.log(string);
console.log(array);
console.log(object);


console.log(typeof integer);
console.log(typeof decimal );
console.log(typeof string);
console.log(typeof array);
console.log(typeof object);


let Mixit = [1,"two",3.0];
console.log(Mixit)
console.log(typeof Mixit);


let blue = null;
let  red = undefined;


// ***********C. Task 3. functions and contional statements************
// convert R1000 into dollars, euros and pounds.

function convertToDollars(amount) {    return amount / 54.50500;
}
function convertToEuros(amount) {    return amount / 50.98000;
}
function convertToPounds(amount) {    return amount / 44.35240;
}

function calculateAmountWithVAT(amount) {
    const VAT = 0.15;
    return amount * (1 + VAT);
}
let amountAfterTax = calculateAmountWithVAT(400);
console.log(`The amount after tax is ${amountAfterTax}`);

let firstNum = 8;
let secondNum = 20;
let thirdNum = 14;

function displayLargerValue() {
    let larger = Math.max(firstNum, secondNum, thirdNum);
    console.log(`The larger value is: ${larger}`);
}
displayLargerValue();

let sortedNumbers = [firstNum, secondNum, thirdNum].sort((a, b) => b - a);
console.log("Sorted numbers from largest to smallest:", sortedNumbers)

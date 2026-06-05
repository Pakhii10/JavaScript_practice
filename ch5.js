// numbers and maths in javascript

let score=100
// console.log(score);
// we know that this is a number

// exclusivly defining a number 
let scoreFinal = new Number(400)
// console.log(scoreFinal);

// console.log(scoreFinal.toFixed(4));
let scorePre=12.34
// console.log(scorePre.toPrecision(3));

let current=1000000
// console.log(current.toLocaleString('en-IN'));

// -----MATH IN JS-----
// console.log(Math);


// console.log(Math.abs(-4));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(5,4,-2,-9));
// console.log(Math.max(10,1000,99999,42,34,344));
// console.log(Math.random()) Will always generate value in between 0 to 1

// if you want a number in a particular range
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)
// Type conversion
let password="33abc"
let stringNumber = Number(password)
// console.log(typeof stringNumber)
// console.log(stringNumber) 

// 33 is a number string to number successful
// 33abc is not a number that is why it is showing NaN

let logged=true
let numberBoolean=Number(logged)
// console.log(numberBoolean)

// o/p will be 1 
// true = 1 false =0

let booleanValue=1
let booleanNumber = Boolean(booleanValue)
// console.log(booleanNumber)
// 1 is true 0 is False

let emptyString=""
let stringBoolean = Boolean(emptyString)
console.log(stringBoolean)
// empty string is false where as string value will be true

let number=33
let numberString=String(number)
console.log(numberString)
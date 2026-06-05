// string in javascript

let name="pakhi"
let surname=" Solanki"

// we can simple concatinate both of them

console.log(name + surname + "YOHOO") //also we can directly add random strings
//OUTDATED

//  NOTE: lets using STRING INTERPOLATION METHOD
let age=21
console.log(`hey my full name is ${name} ${surname} and age is ${age}`);

//on the console we can also access string differently like in key value pair(object)

let fullName="pakhisolanki"
const gameName=new String(fullName)
// gameName
// console.log(typeof gameName) 
// console.log(gameName) //this will work diffrently on console
console.log(gameName.length)
console.log(fullName.length)
const newString=gameName.slice(-7,-1)
console.log(newString)

let name = "Naveen";
let repoCount = 20;

// console.log(name + repoCount);

// console.log(`My name is ${name} and my repo count on github is ${repoCount}`);

let myString = new String("Wikipedia");

// console.log(myString.toUpperCase());     // To uppercase 
// console.log(myString.charAt(4));         // To find a character using index
// console.log(myString.indexOf("p"));      // To get an index using character
// console.log(myString.substring(0,4));    // To substring but not valid with negative indexing !!
// console.log(myString.slice(0,4));        // To slice the string and it accepts the negative and positibve both indexing !!
// console.log(myString.slice(-8,-5));

let myStr = "       There was a king called Ashoka     ";

// console.log(myStr.trim()); // Will remove extra whitespace.

let cricScore = "My current innings score is 99";

let updatedScore = cricScore.replace("99","100");
// console.log(updatedScore);

let myVariable = "hitesh-hc-com"

// console.log(myVariable.split("-"), typeof(myVariable.split("-")));
// console.log(myVariable.includes("hc")); // true


let strr1 = "Hello";
let strr2 = " World";

console.log(strr1.concat(strr2));

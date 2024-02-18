
/*

    Control flow in Javascript : Suppose we create a function under if else ladder block so that is considered as control flow
    code otherwise that declaration part of function in global scope won't be an optimised way of programming.



    Essenstial comparision operator to handle if or else or else if statement are :

    < , > , <= , >= , == , != , === , !==

*/


// Write a program to give a license to a person 


// let age = 81;

// if (age < 18) {
//     console.log("Cannot drive a car !");
// } else {
//     console.log("Can drive a car !");
// }


// if (age < 18) {
//     console.log("Cannot drive a car !");
// } else if (age == 18) {
//     console.log("Can drive a car !");
// } else {
//     console.log("Surely you can drive !!");
// }

// if (age < 18) {
//     console.log("Cannot drive a car !");
// } else if (age == 18 || age <= 60) {
//     console.log("Can drive a car !");
// } else {
//     console.log("You must not drive a car now !!");
// }

// Switch Statement :


let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let month = 12;

// switch (month) {
//     case 0:
//         console.log("Month: ", monthArray[month]);
//         break;
//     case 1:
//         console.log("Month: ", monthArray[month]);
//         break;
//     case 2:
//         console.log("Month: ", monthArray[month]);
//         break;
//     case 3:
//         console.log("Month: ", monthArray[month]);
//         break;
//     case 4:
//         console.log("Month: ", monthArray[month]);
//         break;
//     case 5:
//         console.log("Month: ", monthArray[month]);
//         break;
//     case 6:
//         console.log("Month: ", monthArray[month]);
//         break;
//     case 0:
//         console.log("Month: ", monthArray[month]);
//         break;
//     case 7:
//         console.log("Month: ", monthArray[month]);
//         break;
//     case 8:
//         console.log("Month: ", monthArray[month]);
//         break;
//     case 9:
//         console.log("Month: ", monthArray[month]);
//         break;
//     case 10:
//         console.log("Month: ", monthArray[month]);
//         break;
//     case 11:
//         console.log("Month: ", monthArray[month]);
//         break;

//     default:
//         console.log("Default Output");
//         break;
// }


// truthy or falsy statement

/*  
    These are those values which are assumed to be true or false as we do not compare the variables here.

    falsy values :

    false, 0, -0, BigInt 0n, "", null, undefined, NaN

    truthy values :

    "0", "false", "-0", " ", [], {}, function(){}
*/

const userEmail = "nitz9@outlook.com";
// const userEmail = "";
// const userEmail = null;

// if (userEmail) {
//     console.log("Email is ", userEmail);
// }else {
//     console.log("No email");
// }


// const userName = [];

// if (userName.length === 0) {
//     console.log("Empty array !!");
// }else{
//     console.log("Not an empty array !!");
// }


// const userDetails = {};

// if (Object.keys(userDetails).length === 0) {
//     console.log("Empty object");
// }else {
//     console.log("Not an empty object !!");
// }



/*
    Nullishing coalscening operator : ??

    It is used to avoid null or undefined return value into a variable after any computation may be some computing we have done with the datebase and resulting a return value null or undefined so we can pass any other value.


    let a = 5 ?? 10     // here first value is passed into variable a not second value for sure

    let a = null ?? 10  // This time a will equal to 10 not to null.

    let a = undefined ?? 50 // a will equal to 50 not to undefined.

*/


let myVariable = 50 ?? 100 ;  // After any computation may be result from database or somewhere like firebase

// console.log(myVariable);     // Result : 50

// let myVar = null ?? 100 ;    // In place of 100 we can call any function to get a desired output in spite of a null value.

// console.log(myVar);          // Result : 100

let myVar = undefined ?? 100 ;  // In place of 100 we can call any function to get a desired output in spite of an undefined value.

// console.log(myVar);          // Result : 100 


// Ternary operator : ?

// const userName = "Naveen";
// const userName = "0";
// const userName = " ";



// const userName = 0;
// const userName = false;
// const userName = undefined;
// const userName = "";
// const userName = null;

// userName ? console.log(`Username is ${userName}`) : console.log("No username !!");












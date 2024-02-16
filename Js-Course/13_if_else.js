
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


// truty or falsy statement


const userEmail = "nitz9@outlook.com";
// const userEmail = "";
// const userEmail = null;

if (userEmail) {
    console.log("Email is ", userEmail);
}else {
    console.log("No email");
}



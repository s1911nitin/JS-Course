
/*

    Control flow in Javascript : Suppose we create a function under if else ladder block so that is considered as control flow
    code otherwise that declaration part of function in global scope won't be an optimised way of programming.



    Essenstial comparision operator to handle if or else or else if statement are :

    < , > , <= , >= , == , != , === , !==

*/


// Write a program to give a license to a person 


let age = 81;

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

if (age < 18) {
    console.log("Cannot drive a car !");
} else if (age == 18 || age <= 60) {
    console.log("Can drive a car !");
} else {
    console.log("You must not drive a car now !!");
}
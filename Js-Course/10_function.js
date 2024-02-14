
// Functions

// function myfunc() {
//     console.log("This is first function !");
// }

// myfunc();

// How to get an average of two numbers ?

// function avg(num1, num2) {        // num1 and num2 are called as Parameters in JS.
//     return (num1 + num2)/2;
// }

// const average = avg(4,5);         // 4 and 5 are called as Arguments in JS.
// console.log(`The average of two numbers : ${average}`);

function myFunc(username="Animal") {
    // if (username === undefined) {
    //     return `Username cannot be set due to undefined !!` 
    // }

    if (!username) {
        return `Username cannot be set due to undefined !!` 
    }
    return `The username is : ${username}`
}

// console.log(myFunc("Alka Kumari"));
// console.log(myFunc());
// console.log(myFunc("Sam Bahadur"));


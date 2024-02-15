
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



// Rest operators in JS Function

function myFunction(val1, ...rest) {
    console.log(val1);
    console.log("Rest Parameters will come up with a bundle of array", rest)
}

// myFunction("Naveen", "Suresh", "Ramesh", "Pradeep", "Dipanshu")

// How to pass object in a function ?


let myObj = {
    username : "Rahul Dravid",
    profession : "Cricket",
}

function myNewFunc(getObj) {
    console.log(`Username is ${getObj.username} and his profession is ${getObj.profession}`);
}

// myNewFunc(myObj);
// myNewFunc({
//     username : "Rahul Dravid",
//     profession : "Cricket",
// });

let myArray = [10,25,2,15,48,85,80]

function myNewFunction(getArray) {
    console.log(`My array value at index position 4 is ${getArray[4]}`);
}

// myNewFunction(myArray)
// myNewFunction([10,25,2,15,48,85,80])



/*---------------------------------Scope in JS----------------------------- */


let x = 20;

function myFunc() {
    // let x = 10;
    if (x) {
        let x = 10;
        console.log(x);
    }
    console.log(x);
}

// myFunc();
// console.log(x);


function one() {
    const username = "Naveen";

    function two() {
        const website = "Youtube";
        console.log(username);
    }

    // console.log(website);
    two()
}
// one();


if (true) {
    const username = "Naveen";

    if (username === "Naveen") {
        const website = " Youtube";
        console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);


function addone(num) {
    return num + 1
}

addone(5)


const addtwo = function (num) {
    return num + 2
}

addtwo(6)


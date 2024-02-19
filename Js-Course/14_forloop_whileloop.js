
/* 
    forloop : It is used to iterate an elements of an iterable and it will keep iterating till the time all the elements are iterated. 

    continue : This is a keyword which stops an execution of the code which is written below continue till the time continue block is true.

    break : As name itself once the break statement gets true it will stop the loop and exit.


*/

// Write a program to print 0 to 50 numbers?


// for (let index = 0; index < 51; index++) {
//     console.log(index);
// }

// Write a program to print 5 to 50 numbers?

// for (let index = 0; index < 51; index++) {
//     if (index < 5) {
//         continue
//     }
//     console.log(index);
    
// }


// let myArray = ["Potato", "Tomato", "Brinjal", "Cauli Flower", "Carrot", "Turnip"];

// for (let index = 0; index < myArray.length; index++) {
//     if (myArray[index] === "Cauli Flower") {
//         continue
//     } else if (myArray[index] === "Carrot") {
//         break
//     }
//     console.log(myArray[index]);
    
// }


/* 
    while loop : till the time condition is true , it will keep continuing so we programmer needs to stop it by using assignment operator.


*/

// Write a program to print 0 to 50 numbers ?

// let index = 0;

// while (index < 51) {
//     console.log(index);
//     index +=1
// }

// Write a program to print 5 to 50 numbers ?

// let index = 0;

// while (index < 51) {
//     if (index < 5) {
//         index +=1
//         continue
//     }
//     console.log(index);
//     index +=1
// }


// let myArray = ["Potato", "Tomato", "Brinjal", "Cauli Flower", "Carrot", "Turnip"];

// let index = 0;

// while (index < myArray.length) {
//     if (myArray[index] === "Cauli Flower") {
//         index +=1
//         continue
//     }else if (myArray[index] === "Carrot") {
//         break
//     }
//     console.log(myArray[index]);
//     index +=1
// }


// do while loop : It is executed before condition check !!

// Write a program to print 0 to 50 numbers ?

// let index = 0;

// do {
//     console.log(index);
//     index +=1
// } while (index < 51);


// Write a program to print 5 to 50 numbers ?


// let index = 0;

// do {
//     if (index < 5) {
//         index +=1
//         continue
//     }
//     console.log(index);
//     index +=1
// } while (index < 51);


let myArray = ["Potato", "Tomato", "Brinjal", "Cauli Flower", "Carrot", "Turnip"];

let index = 0;

do {
    if (myArray[index] === "Cauli Flower") {
        index +=1
        continue
    } else if (myArray[index] === "Carrot") {
        break
    }
    console.log(myArray[index]);
    index +=1
} while (index < myArray.length);

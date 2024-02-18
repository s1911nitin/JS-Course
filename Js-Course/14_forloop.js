
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


let myArray = ["Potato", "Tomato", "Brinjal", "Cauli Flower", "Carrot", "Turnip"];

for (let index = 0; index < myArray.length; index++) {
    if (myArray[index] === "Cauli Flower") {
        continue
    } else if (myArray[index] === "Carrot") {
        break
    }
    console.log(myArray[index]);
    
}
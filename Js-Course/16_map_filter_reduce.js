
/*----------------------------------------------- filter -----------------------------------------------------*/

// let myArray = [1,2,3,4,5,6,7,8,9,10];

// let newArray = [];

// const values = myArray.forEach((item)=>{
//     if (item >=4) {
//         console.log(item);
//         return item;        // Does not return item values
//     }
// })

// console.log(values);        // undefined



// myArray.forEach((item)=>{
//     if (item>=4) {
//         newArray.push(item)       
//     }
// })

// console.log(newArray);




// const values = myArray.filter((item)=>{
//     if (item >=4) {
//         console.log(item);
//         return item;         // It returns item value into an array.
//     }
// })

// console.log(values);         // Array of return item values.


// const values = myArray.filter((item)=> item >=4 ? item : "")
// console.log(values, values.length);


// const books = [
//     {
//         title : "Book one",
//         genre : "Fiction",
//         publish : 1981,
//         edition : 2004
//     },
//     {
//         title : "Book two",
//         genre : "Non-Fiction",
//         publish : 1992,
//         edition : 2008
//     },
//     {
//         title : "Book three",
//         genre : "History",
//         publish : 1999,
//         edition : 2007
//     },
//     {
//         title : "Book four",
//         genre : "Science",
//         publish : 2009,
//         edition : 2014
//     },
//     {
//         title : "Book five",
//         genre : "Fine Arts",
//         publish : 1995,
//         edition : 2000
//     },
//     {
//         title : "Book six",
//         genre : "History",
//         publish : 1755,
//         edition : 1910
//     },
//     {
//         title : "Book seven",
//         genre : "Science",
//         publish : 1998,
//         edition : 2015
//     },
//     {
//         title : "Book eight",
//         genre : "History",
//         publish : 1857,
//         edition : 1900
//     },
// ]

// const userBooks = books.filter((book) => {
//     if (book.genre === "History") {
//         return book;
//     }
// })

// const userBooks = books.filter((book) => {
//     if (book.edition > 2000) {
//         return book;
//     }
// })

// console.log(userBooks);


/*--------------------------------------------------- map ---------------------------------------------------*/


let myArray = [1,2,3,4,5,6,7,8,9,10];

// const newArray = myArray.map((item)=>{
//     return item * item
//     // return item + 10
// })


// const newArray = myArray.map((item) => item * item)
// console.log(newArray);


// Chaning concept : It is a way to use two or more methods one by one on current method output.


const newArray = myArray.map((item)=> item * item).filter((item) => item>=25 ? item : "")
// console.log(newArray);




/*--------------------------------------------------- reduce ---------------------------------------------------*/

// let myArray = [1,2,3,4];

// const indexValue = 0;

// const result = myArray.reduce(function (accumulator, currentValue) {
//     return (accumulator + currentValue)
// }, indexValue)



// const result = myArray.reduce((acc, currVal)=> (acc + currVal),0)

// console.log(result);


let courses = [
    {
        courseName : "Javascript",
        price : 2999
    },
    {
        courseName : "Python",
        price : 3999
    },
    {
        courseName : "Data Science",
        price : 12999
    },
    {
        courseName : "Ethical Hacking",
        price : 4999
    },
]


const totalToPay = courses.reduce((acc, item) => (acc + item.price), 0)
console.log(totalToPay);


// for of loop

// let heros = ["Flash", "Batman", "Spiderman", "Thor"];

// for (const hero of heros) {
//     console.log(hero);
// }

// let myStr = "Hello Twitter";

// for (const chr of myStr) {
//     if (chr === " ") {
//         continue
//     }
//     console.log(chr);
// }


// let myObj = {
//     "Harry":2,
//     "Larry":4,
//     "Cherry":6,
//     "Sherry":8,
// }



// for (const key of Object.keys(myObj)) {
//     console.log(key, ":", myObj[key]);
// }


// const mapObj = new Map();

// mapObj.set("IN", "India")
// mapObj.set("USA", "United States of America")
// mapObj.set("Fr", "France")
// mapObj.set("Fr", "France")


// console.log(mapObj);

// let key, value;

// for (const val of mapObj) {    
//     [key, value] = val
//     console.log(`${key} : ${value}`);
// }



/*  
                            Map                                  vs                   Object


        1) Maintain order of key value pairs as we inserted             1) No order of key value pairs as we inserted

        2) Unique key and value pair here                               2) Repetation of key value pair here

        3) for of loop works not for in loop                            3) for of loop does not work but for in works

        Ex of Map:

        const map = new Map();
        map.set('key','value')                 // set method is used to set key value pair on map object.


*/


// let heros = ["Flash", "Batman", "Spiderman", "Thor"];

// for (const key in heros) {
//     console.log(heros[key]);
// }


// let myStr = "Hello Twitter";

// for (const key in myStr) {
//     if (myStr[key] === " ") {
//         continue
//     }
//     console.log(myStr[key]);
// }

// let myObj = {
//     "Harry":2,
//     "Larry":4,
//     "Cherry":6,
//     "Sherry":8,
// }

// for (const key in myObj) {
//     console.log(myObj[key]);
// }


// const mapObj = new Map();

// mapObj.set("IN", "India")
// mapObj.set("USA", "United States of America")
// mapObj.set("Fr", "France")
// mapObj.set("Fr", "France")


// for (const key in mapObj) {
//     console.log(key);     // Nothing will come up in console means for in does not work with Map object.

// }


// let heros = ["Flash", "Batman", "Spiderman", "Thor"];

// heros.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

// heros.forEach(function (item, index, arr) {
//     console.log(item, index, arr);
// })

// function printMe(item, index, arr) {
//     console.log(item, index, arr);
// }

// heros.forEach(printMe)

// const printMe = (item, index, arr)=>{
//     console.log(item, index, arr);
// }

// heros.forEach(printMe)


const Employees = [
    {
        userName : "Naveen",
        userLanguage : "Python"
    },
    {
        userName : "Seema",
        userLanguage : "Andriod"
    },
    {
        userName : "Ritik",
        userLanguage : "PHP"
    },
    {
        userName : "Nitz",
        userLanguage : "Javascript"
    },
]


// console.log(Employees, typeof Employees);

Employees.forEach((item)=>{
    console.log(`User ${item.userName} is working on the language ${item.userLanguage}`);
})




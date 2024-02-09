
// Datatypes : Two types of datatypes in Javascript : Primitives and Non Primitives !!

// Primitives : String, Number, Boolean, Null, Undefined, Symbol and BigInt

// let a = "Hello World";
// let a = 5425;
// let a = 5425.25;
// let a = true;
// let a = null;
// let a;

// console.log(a, typeof a);

let id = Symbol('125ab');   // It returns the unique value
let anotherId = Symbol('125ab') // Here the value will look like the same above value but actually it is different due to Symbol as it returns different value.

// console.log(id, typeof id);
// console.log(anotherId, typeof anotherId);

// console.log(id === anotherId) // false


/* Non Primitives or Reference Types */

// Array, Object, Functions

let arr = ["Harry", "Larry", "Cherry", "Sherry"];

// console.log(arr, typeof arr);

let myObj = {
    Breakfast : "Poha",
    Lunch : "Dal Rice",
    Dinner : "Soyabean",
    Price : 250,
}

// console.log(myObj, typeof myObj);

let myfunc = function() {
    console.log("Hello World !!");
}

myfunc()


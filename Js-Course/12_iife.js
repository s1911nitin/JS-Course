
// IIFE - Immediately Invoked Function Expression

/* 
    IIFE - This is a function which is executed immediately at the time file loaded and it helps us to avoid the global scope pollution.
*/


// function myFunc() {
//     console.log("This is my function");
// }
// myFunc();                           // Normal Function

(function myFunc() {
    console.log("This is named IIFE....");
})();

(function () {
    console.log("This is unnamed IIFE....");
})();

(()=>{
    console.log("This is unamed arrow IIFE....");
})();

// With argument IIFE

((name)=>{
    console.log("This is unamed arrow IIFE with argument", name);
})("Naveen")
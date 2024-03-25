/*
    Lexical Scope : When we declare one inner function inside outer function so inner function
    would have access of variables and properties of outer function, this is known as lexical
    scope.

*/


// function Outer() {
//     let username = "Nitz"

//     // console.log(secret);  // Parent cannot access the property of children.

//     function inner() {
//         let secret = "my123"

//         console.log("inner", username);  // inner function would have access of username here.
//     }

//     function innerTwo() {
//         console.log("innerTwo", username);  // innerTwo function would have access of username here.
//         // console.log(secret);  // Siblings functions cannot share the scope so secret will not be available here.
//     }

//     inner()
//     innerTwo()
// }

// // console.log(username);  // You cannot use username variable outside Outer function scope.

// Outer()




// Closure : When we return inner function inside outer function which would have lexical scope, this is known as closure.

// function Outer() {
//     let username = "Nitz"

//     function inner() {
//         console.log("Username is ", username);    // username will be available here due to lexical scope.
//     }

//     return inner
// }

// const myfunc = Outer()
// myfunc()


/*

    As we are returning the inner fn so it will be replaced with Outer() and will be assigned to myfunc 
    variable here now the main thing which needs to be noted out that inside callstack first global
    execution context will come and then Outer over it and inner over Outer fn so execution context
    of inner fn will be resolved first as it was declared inside Outer fn so aaccess of all the variables
    of Outer fn will be available for inner fn (lexical scope) due to which Outer() which is replaced
    with inner fn would come with the scope of Outer fn if it does not happen so username variable
    will not be available and we get an error username is not defined.

    Finally inner fn is assigned into myfunc variable so indirectly we are calling inner fn which has
    an access of username of Outer fn and result output : Username is  Nitz

*/
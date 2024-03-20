
// OOP : Object oriented programming in javascript - Do some of the task in a structural manner is known as oop.

// Before learning oop in js we must know about the concept Object literal.

// const user = {
//     username : "Nitz",
//     state : "Uttarakhand",
//     occupation : "Programmer",
//     userDetails : function () {
//         console.log(`The details of the user is Username : ${this.username}`);
//     }
// }

// console.log(user.username, user.occupation)

// user.userDetails()

// console.log(this)                 // Empty object {}

// const user2 = {
//     username : "Nitz2",
//     state : "Uttarakhand2",
//     occupation : "Programmer2",
//     userDetails : function () {
//         console.log(`The details of the user is Username : ${this.username}`);
//     }
// }

// user.userDetails()
// user2.userDetails()

/*  There is one problem if we need to create a new context object so my code is repeating which is not a good approach,
    to overcome this mess up we will use the function approach here.

*/

// function User(username, city, occupation) {
//     this.username = username,            // here this is the current context object of current context User which is constructor function and this refer to user1 or user2 respective to their current context.
//     this.city = city,
//     this.occupation = occupation,

//     this.userDetails = function () {
//         console.log(`The details of the user is Username : ${this.username}`);  // Same as above
//     }
// }

// const user1 = new User("Nitz", "Haldwani", "Programmer")
// const user2 = new User("Nitz2", "Haldwani2", "Programmer2")
// user1.userDetails()
// user2.userDetails()


/*  
    new : Whenever an object or instance is created using new keyword so that object is connected to its constructor function property
    which is prototype to get an access of prototype properties and its methods and then constructor function is called to instantiate
    all the variables like this.username, this.city and so on and finally that newly created object is returned.

    Note:

    Array object or function object or String object has prototype properties of their constructor function to use and that prototype 
    inherits the properties of parent prototype and so on refer to super prototype Object and Object prototype refers to null.

    a = []   // array object

    a refers to its constructor function Array() prototype and Array() prototype refers to Object prototype and it refers to null.

*/




/*---------------------------------------------------Prototype--------------------------------------------------*/

// myObj = [1,5,8,10]

// console.log(myObj.length);

// Array.prototype.hurray = "Hurray";

// console.log(myObj.hurray);

/*
    myObj object is an array object which has reference of the prototype of constructor function Array() so behind the
    scene working of creating an object myObj = new Array() is completed due to which myObj has access of prototype
    properties of Array() so if we will create one property hurray inside prototype of Array() then created property 
    hurray access will be available for myObj.

*/

// myObj2 = {
//     harry : 2,
//     larry : 4,
// }

// Object.prototype.hurray2 = "Incredible";   

/*
Here we created a property for super prototype so an array object or function object or String object all will have access
of hurray2.

This is because myObj has also an access of hurray2 but myObj2 does not have an access of hurray property because it is
available at Array() constructor function and will be used by myObj only.

*/

// console.log(myObj2.hurray2, myObj.hurray2, myObj.hurray);




// function myfunc(num) {
//     return num*5
// }

// console.log(myfunc(5))

// myfunc.power = 2                                   // Everything in js is an object

// console.log(myfunc.power)











// function User(username, score) {
//     this.username = username
//     this.score = score
// }

// user1 = new User("Nitz", 100)
// user2 = new User("Nitz2", 200)

// User.prototype.increment = function () {
//     this.score +=1
//     return this.score
// }

// User.prototype.printMe = function () {
//     console.log(`The current score: ${this.score}`);
// }

// user2.increment()
// user2.increment()
// user2.printMe()
// user2.printMe()


// Note : Constructor function can only be created using new and fn function keyword but new is not available for arrow function so cannot create a constructor function using arrow function it will give us an error.




/************************************Prototype inherital approach*********************************** */

obj1 = {
    harry:2,
    larry:4,
}


// console.log(obj1.harry);

obj2 = {
    carry:6,
    sherry:8,
}

// console.log(obj2.carry);

Object.prototype.cherry = 10   // this property will be accessible by both obj1 and obj2 as we have inserted it into super prototype Object.

// console.log(obj1.cherry, obj2.cherry);

/*
    Cannot we use the property of others object which are only present inside themselves in spite of super prototype Object ?

    We can by using __proto__ which was traditonally used and now modern technique to use isPrototypeOf.
*/

// console.log(obj2.harry, obj2.carry);

// obj2.__proto__ = obj1                                         // That was traditional approach

// console.log(obj2.harry, obj2.carry, obj1.sherry);


// New approach is using of isPrototypeOf   


Object.setPrototypeOf(obj2, obj1)

console.log(obj2.carry, obj2.harry);





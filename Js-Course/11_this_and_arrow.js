
// this   - It refer to the context object in JS

const obj = {
    name : "Naveen",
    email : "naveen90@gmail.com",
    location : "Delhi",
    isLoggedIn : true,
    greeting : function(){
        console.log(`Hello ${this.name} , Welcome to our website !`);
    }
}

// console.log(obj.location, obj.email);

// obj.greeting()

// obj.name = "Suresh"

// obj.greeting()



// console.log(this);   // It will console {} in node environment and in browser it will Window object.

function myFunction() {
    const username = "Rahul Dravid";
    console.log(this.username);
}

// myFunction();

const myFunc = () => {
    const username = "Ricky Ponting";
    console.log(this.username);
}

// myFunc();


//Explicit return

const addTwoNumbers = (num1, num2) =>{      
    return num1 + num2;    
}

// console.log(addTwoNumbers(5,4));


//Implicit return - No need to use return keyword and must not use of {} , here return is done automatically.

const averageTwoNumbers = (num1 , num2) => (num1 + num2)/2

// console.log(averageTwoNumbers(5,4));


// How to return an object then if we cannot use {} in implicit return ?

const myGreeting = ()=> ({username : "Dhruv Jurel"})

console.log(myGreeting());


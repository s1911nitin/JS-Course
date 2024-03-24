/*
    Can we change the value of Math.PI if yes then how or no then why not ?

*/

// console.log(Math.PI);

// Math.PI = 5            

// console.log(Math.PI);  

/*
  We tried to assign 5 into it however it remains same as everybody says it is constant that is 
  why we are not able to update it.


  In depth knowledge would be come when we will be able to know why we are not able to change it
  behind the scene there must be something running which restricts us to change the value of PI.

  What is that? That is the biggest question.

*/


// const description = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(description);


/*

    Output:     {
                    value: 3.141592653589793,
                    writable: false,
                    enumerable: false,
                    configurable: false
                }


    It clears us that behind the scene there must be some of the scripting and
    logic would be running due to which we have PI property is set to writable
    false that is the reason we are not able to change it.

    JS does not allow us to change PI value as there are too much wrappers over 
    it in c or c++ as js is made up due to these languages.



    That is fine we do not have that much permission to change these values which
    are set by libraries due to some of the wrappers however there is one question
    raises if we create an object and as we have created it we are the owner of that
    object so can we playaround with its properties. Yes or No ?


    Yes we can as JS allows us to playaround with the property of those objects which
    are created by our own.

    Now we will see how we can do that....


*/


// const obj = {
//     name : "Nitz",
//     designation : "Programmer",
//     salary : "23K"
// }


// console.log(obj, "Before");

// const description = Object.getOwnPropertyDescriptor(obj, "designation")
// console.log(description);


/*

        Output :    {
                        value: 'Programmer',
                        writable: true,
                        enumerable: true,
                        configurable: true
                    }


        Here, we have designation property writable sets to true that is why we
        can change it and enumerable also sets to true to we can apply loop over
        it as well.

*/

// obj.designation = "Instructor"

// console.log(obj, "After");


// Object.defineProperty(obj, "designation", {
//     writable : false,
// })

// console.log(Object.getOwnPropertyDescriptor(obj, "designation"))


// obj.designation = "Instructor"

// console.log(obj, "After");



/***********************************************enumerable**********************************************/


const obj = {
    name : "Nitz",
    designation : "Programmer",
    salary : "23K",
    occupation : function () {
        console.log("Govt job employee !!");
    }
}

// console.log(obj);

for (const key of Object.keys(obj)) {
    if (typeof obj[key] !== 'function') {
        console.log(`${key} : ${obj[key]}`);        
    }

}

console.log(Object.getOwnPropertyDescriptor(obj, "designation"))

Object.defineProperty(obj, "designation", {
    enumerable : false,             // Due to which loop will not iterate the property designation.
})

for (const key of Object.keys(obj)) {
    if (typeof obj[key] !== 'function') {
        console.log(`${key} : ${obj[key]}`);        
    }

}


/*

    Final Output :

    name : Nitz
    designation : Programmer
    salary : 23K

    {
    value: 'Programmer',
    writable: true,
    enumerable: true,
    configurable: true
    }
    
    name : Nitz
    salary : 23K




*/




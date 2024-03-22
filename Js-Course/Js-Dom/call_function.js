
// call function in js :

// function User(username, email, city) {
    
//     this.username = username
//     this.email = email
//     this.city = city
// }

// user1 = new User("Nitz", "s195485@gmail.com", "Haldwani")
// console.log(user1);         // Output :        User { username: 'Nitz', email: 's195485@gmail.com', city: 'Haldwani' }



function setUsername(username) {
    this.username = username
    console.log("Called");
}


function User(username, email, city) {
    
    // setUsername(username)    // Will not get the reference by this as this inside setUsername is different to this of User

    setUsername.call(this, username) // now this of User can be used inside setUsername.

    this.email = email
    this.city = city
}

user1 = new User("Nitz", "s195485@gmail.com", "Haldwani")
console.log(user1);


/*

    Output : User { email: 's195485@gmail.com', city: 'Haldwani' }

    Now the question if we set this.username = username into a different function and call it inside the User construction function
    so we will not get username in output.    Why?


    This is bacause when setUsername is called so we will get an output Called and here inside setUsername function this is refering to the current context setUsername as every context has its own this so when it will be assigned into the callstack , after execution of
    setUsername function everything inside this function its variables or functions will also be washed out so we cannot get get it inside
    User because if we want this.username = username inside User so it is obvious we would need of this keyword of context User in spite of setUsername function only and there must be one method which would allow us to pass the parameter to setUsername where we are looking to
    set them and to get an access of those variables and functions inside User including parameter this which would be referencing to the context User and will let the setUsername that please make sure to use this of User instead of your own one.

    So after execution of setUsername it will be out from callstack but as we were using this of User inside setUsername using that method which takes parameter this of that context which we are looking for including extra parameters so variables or functions inside setUsername will provide reference to the User constructor function and we can use them with the object of User easily.


    This can be acheived using one method call in js.


    Syntax :    setUsername.call(username)

*/
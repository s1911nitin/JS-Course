// classes in JS

// function setUsername(username) {
//     this.username = username
//     console.log("Called");
// }



// class User {

//     constructor(username, email, city) {
//         // setUsername(username)

//         setUsername.call(this, username)

//         this.email = email
//         this.city = city
//     }

// }

// user1 = new User("Nitz", "s198545@gmail.com", "Haldwani")
// console.log(user1);




/************************************************************classes*********************************************************/




class setUsername{
    constructor(username) {
        this.username = username 
    }

    printMe(){
        console.log("The username is:", this.username);
    }
}



class User extends setUsername{

    constructor(username, email, city) {
        super(username)
        this.email = email
        this.city = city
    }

    printme(){
        console.log(`User Details : Username - ${this.username}, Email - ${this.email} and city - ${this.city}`);
    }

}

// user1 = new User("Nitz", "s198545@gmail.com", "Haldwani")
// console.log(user1);

// user1.printMe()


// user1.printme()

// setuser1 = new setUsername("Harry")

// setuser1.printMe()

// setuser1.printme()          // It cannot be accessible as parent cannot access the property of child but child can access the property of parent.








// Testing of __proto__

obj1 = new User("Larry", "larry@gmail.com", "Haldwani")
obj2 = new setUsername("Cherry")
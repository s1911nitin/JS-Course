
// class User{
//     constructor(email, password){
//         this.email = email
//         this.password = password

//     }


//     get email(){                                                    // getters to get override property
//         return this._email.toUpperCase()
//     }

//     set email(value){
//         this._email = value
//     }

//     get password(){                                                      
//         return `${this._password}encryption`
//     }

//     set password(value){
//         this._password = value
//     }
// }

// const user1 = new User("nitz@gmail.com", 12345)

// console.log(user1.password);
// console.log(user1.email);




/*

    Why do we need of getters or setters in js ?

    Suppose we want to return password to the instances or objects of User after doing some
    encryption when they are looking to get a result of user1.password so we can get it done
    by using getters or setters.


    Whenever we declare this.email or this.password so for each and every properties inside
    constructor getters and setters are applied behind the scene with default nature so we 
    can override these properties using getters and setters to return a different result after
    applying some sort of encryption and all.

    get password(){                                        // getters to get override result
        return `${this.password}encryption`
    }



    Make sure not to use getter only if you are using getter so you will have to give setters
    for a property otherwise you will get an error : 

        Cannot set property password of #<User> which has only a getter


    set password(value){                                   // setters to set override result
        this.password = value
    }

    Now we will get an error : Maximum call stack size exceeded at set password [as password]

    This is because when we are applying setters so there is a race situation happens between
    constructor and set password (setters) to set this.password , to overcome this problem we 
    must use private property variable this._password or this._email inside setters and getters
    which will be working internally however instances or objects of User will be using the 
    property name this.password or this.email only.
    




*/


function User(email, password) {

    this.email = email
    this.password = password


    Object.defineProperty(this, "email", {
        get : function() {
            return email.toUpperCase()
        },
    
        set : function(value) {
            email = value

        }
    })


    Object.defineProperty(this, "password", {
        get : function() {
            return `${password}encryption`
        },
    
        set : function(value) {
            password = value

        }
    })


}

user1 = new User("nitz@gmail.com", 12345)

console.log(user1.email);
console.log(user1.password);
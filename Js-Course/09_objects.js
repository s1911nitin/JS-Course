
// Objects in Javascript....

let mySym = Symbol('key1');

let userObj = {
    name : "Naveen",
    "location" : "Uttarakhand",
    // mySym : mySym,
    [mySym] : "Mykey1",
    email : "nitz@outlook.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Sunday"],
    greeting : function(){
        console.log(`Hello my dear friend ${this.name}`);
    }
}

// console.log(userObj, typeof userObj);

// console.log(userObj.location, userObj["location"]);
// console.log(userObj.mySym, typeof userObj.mySym);
// console.log(userObj[mySym], typeof userObj[mySym]);

// userObj.location = "Himachal"
// Object.freeze(userObj)
// userObj.location = "Delhi"

// console.log(userObj);
// userObj.greeting();

// Singleton object or An object through constructor

let newObj = new Object();

// console.log(newObj, typeof newObj);

// newObj.id = "abc123"
// newObj.email = "abc123@gmail.com"

// console.log(newObj);

let gmailUser = {
    fullname : {
        username : {
            first_name : "Naveen",
            last_name : "Kholi",
        }
    }
}

// console.log(gmailUser.fullname.username.first_name);

let obj1 = {
    1 : "a",
    2 : "b",
}

let obj2 = {
    3 : "c",
    4 : "d",
}

// console.log({obj1, obj2});

// let obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3, typeof obj3);

let obj3 = {...obj1, ...obj2};
// console.log(obj3, typeof obj3);

let databaseObj = [
    {
        id : 101,
        email : "myworld@gmailUser.com",
    },
    {
        id : 102,
        email : "myuniverse@gmailUser.com",
    }
]

// console.log(databaseObj[1].email);

// How to findout all the keys of an object in javascript ?

// let allKeys = Object.keys(userObj);
// let allValues = Object.values(userObj);
// console.log(allValues, typeof allValues);

console.log(userObj.hasOwnProperty("isLoggedIn"));



// Promise :  A promise is an object which represents eventually a completion or failure of an async operation and its resulting value.

const promiseOne = new Promise(function (resolve, reject) {
    // Async task will be done
    // It could be a delay due to DB calls, Network and Cryptography

    setTimeout(()=>{
        console.log("Async task is done");
        resolve()
    }, 1000)
})

promiseOne.then(()=>{
    console.log("Successfully resolved.");
})


new Promise(function (resolve, reject) {
    // Async task will be done
    // It could be a delay due to DB calls, Network and Cryptography

    setTimeout(()=>{
        console.log("Async task2 is done");
        resolve()
    }, 1000)
}).then(()=>{
    console.log("Successfully resolved.");
})


const promiseThree = new Promise(function (resolve, reject) {
    // Async task will be done
    // It could be a delay due to DB calls, Network and Cryptography

    setTimeout(()=>{
        const error = false

        if (!error) {
            console.log("Async task3 is done");
            resolve({username:"Nitz", city:"Jaipur"})
        } else {
            reject({error:"Error has come"})
        }
    }, 1000)
    
})

/*-----------------------------------------------------Chaining approach 1--------------------------------------------*/

// const username = promiseThree.then((response)=>{
//     console.log(response);
//     return response.username        // When then() so it always return another promise object.
// })

// username.then((username)=>{
//     console.log("My username is ", username);
// }).catch((error)=>{
//     console.log(error);
// })


/*-----------------------------------------------------Chaining approach 2--------------------------------------------*/

promiseThree.then((response)=>{
    console.log(response);
    return response.username
}).then((username)=>{
    console.log("My username is ", username);
}).catch((error)=>{
    console.log(error);
})


const promiseFour = new Promise(function (resolve, reject) {
    // Async task will be done
    // It could be a delay due to DB calls, Network and Cryptography

    setTimeout(()=>{
        const error = false

        if (!error) {
            console.log("Async task4 is done");
            resolve({course:"Javascript", fees:"Free"})
        } else {
            reject({error:"Error has come"})
        }
    }, 1000)
})

async function promiseComplete() {
    try {
        const response = await promiseFour
        console.log(response);
        return response.course      
    } catch (error) {
        console.log(error);
    }

}

// const courseName = promiseComplete()                       // courseName is returning another promise object
// courseName.then((course)=>{
//     console.log(course);
// })

// promiseComplete().then((course)=>{
//     console.log(course);
// })

/*---------------------------------------------------Through Async--------------------------------------------*/

async function anotherFunctionComplete() {
    const course = await promiseComplete()
    console.log(`The course name is ${course}`);

}
anotherFunctionComplete()


/*---------------------------------------------------fetch API-------------------------------------------------*/


// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         // console.log(typeof response, response);       

//         // console.log(response.json()); // Promise { <pending> } as response.json() is a promise object so we must use await

//         const data = await response.json()

//         console.log(data, typeof data);

//     } catch (error) {
//         console.log("Error is ",error);
//     }

// }

// getAllUsers()


// const promiseObject = fetch("https://jsonplaceholder.typicode.com/users")

// promiseObject.then((response)=>{
//     // console.log(response);
//     return response
    
// })
// .then((response)=>{
//     // console.log("The real response is", response.json());
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

const promiseObject = fetch("https://jsonplaceholder.typicode.com/users")

promiseObject.then((response)=>{
    // console.log(response);
    return response.json()
    
})
.then((response)=>{
    console.log("The real response issss", response);
})
.catch((error)=>{
    console.log(error);
})
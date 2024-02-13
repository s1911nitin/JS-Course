
let arr = [2,5,15,"navv",5.6,10];

// console.log(arr, typeof arr);

let myArr = new Array(10,4.5,"navv",25);

myArr.push(90);
myArr.pop();
myArr.unshift(100);
myArr.shift();


// console.log(myArr);

// console.log(myArr.includes("navv"));
// console.log(myArr.indexOf("navv"));

// console.log(myArr.join("-"), typeof myArr.join("-"));

// console.log(myArr.toString(), typeof myArr.toString());

// console.log(myArr.reverse());

function sorting(a, b) {
    return (a-b);
}

myArr.sort(sorting).reverse()
// console.log(myArr);

let myArray = [10,25,55,2.5,1,26];

// let newArr = myArray.slice(2,5);

// console.log(newArr, myArray);

let newArr = myArray.splice(2,5);

console.log(newArr, myArray);



/*--------------------------------------Extra Array Methods--------------------------------*/



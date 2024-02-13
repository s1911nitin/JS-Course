
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

// console.log(newArr, myArray);



/*--------------------------------------Extra Array Methods--------------------------------*/

let marvelHeros = ["Thor","Ironman","Spiderman"];
let indianHeros = ["Shaktiman","Naagraj","Dogra"];

// console.log(marvelHeros.concat(indianHeros));
// console.log(marvelHeros.concat(indianHeros));

// console.log([...marvelHeros, ...indianHeros]);

let myNewArray = [2,10,5,[2.5,5,7],67,75,[82,95,[5.6,24]]];

// console.log(myNewArray.flat(Infinity));

let myVar = "Wikipedia";

// console.log(Array.isArray(myNewArray));

// console.log(Array.from(myVar));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));



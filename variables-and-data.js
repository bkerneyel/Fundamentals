/*
 * Variables, Data Types, and Typing
 */
let wordData = "Word List"

console.log(wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

let obj = {
    key1: "Value 1"
    key2: 3,
    obj2: {
       objKey1 : "value of inner object",
    },
};
console.log(obj1.obj2.obj2Key1);

let variable : string = "string";

let var1 = "2";
let var2 + 5;
let result = var1 + var2;

console.log(result);

let add = 1 + 2;
let sub = 2 - 1;
let mult = 2*4;
let division = 4 / 2;
let mod = 5 % 2;

let string = "string 1 " + "string 2";

console.log(string);


*
* Conditionals, Functions, Scope, and Loops
*/

// Equals
let equals = 1 === 1;

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 .+ 5;

// Less than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 1.40;
let storeB = 3.40;

function cmpareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;\
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

// comparStorePrices(10, 5);
// compareStorePrices(7, 10);

function squareNum(number) {
    let squared = number * number;
    return squared;p
}


let squaredNumber = squareNum(10);
console.log(squaredNumber);


let x = 10;

function addNumbers (n, m, x) {
    console.log(x);
    let b;
    if (1==1) {
        let b = 8;
    }
    console.log(b)
    return n + m;
}

addNumbers(1, 2, 10);



//
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let ourLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
    // console.log("i is equal to: " + i);
    console.log(ourArray[i]);
    for(let j = 0; j<10; j++) {
        console.log(' j is equal to : '+ j);

    }
}

let x = 0;

while (x < 10) {
    console.log('Ran')
    x = x + 1;



    /*
* Objects, Interfaces, and API's
 */

let dog = {
    name: "Steve"
    color: "brown"
    breed: "Pug"
    size: "Small"
    bark: function(typeOfBark){
    console.log("Bark!");
    };
},
}


function x(y) {
    y = y + 5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 10,
}
x(y);
console.log(y);

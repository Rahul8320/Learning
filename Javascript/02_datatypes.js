// Primitive

/*
    7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt
*/

const score = 100;
const isLoggedIn = false;
const outsideTemp = null;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

// Reference (Non Primitive)

/*
    Array, Objects, Functions
*/

const heros = ["SuperMan", "SpiderMan", "Thor"];

// +++++++++++++++++++++++++++++++++++++ Memories +++++++++++++++++++++++++++++++++++++++++++

/*  Stack (Primitive) -> return a copy of original value
    Heap (Non-Primitive) -> return the reference of original value
*/

// Primitive
let youtubeChannel = "hiteshchoudharydotcom";

let anotherYoutubeChannel = youtubeChannel; // got an copy of original value
anotherYoutubeChannel = "chaiaurcode"; // only the copy value chnages not the original one.

// console.log(youtubeChannel);
// console.log(anotherYoutubeChannel);

// Non-Primitive
let userOne = {
  email: "user@gmail.com",
  upi: "user@icici",
};

let userTwo = userOne; // get the reference of original value
userTwo.email = "rahul@gmail.com"; // original value is changed!
userOne.upi = "rahul@apl"; // both two variable reference same value

console.log(userOne);
console.log(userTwo);

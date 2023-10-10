/*
  JavaScript array-copy operations create shallow copies. 
  (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

  JavaScript arrays are resizable and can contain a mix of different data types. 
  (When those characteristics are undesirable, use typed arrays instead.)
*/

// ----------- 🎉 Array Declarations 🎉 ----------------------
const myArr = [1, 2, 3, 4, 5];
const myHeros = ["Spiderman", "Ironman", "Captain Marvel"];

// const myArray = new Array("Rahul", 49, "CSE", ["JAVA", "Python", "JS"]);
// console.table([myArr, myHeros, myArray]);
// console.log(myArray);

// ++++++++++++++ 🚀 Array Methods 🚀 +++++++++++++++++++
// myArr.push(7); // add on last
// myArr.pop(); // remove from last

// myArr.unshift(9); // add on first
// myArr.shift(); // remove from first

// console.log(myArr.includes(9));
// console.log(myArr.includes(4));
// console.log(myArr.indexOf(19));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// ========= 🪡 Slice, splice 🧶 ================
// console.log("A -> ", myArr);
// const myn1 = myArr.slice(1, 3);
// console.log(myn1);
// console.log("B -> ", myArr);

// const myn2 = myArr.splice(1, 3);
// console.log(myn2);
// console.log("C -> ", myArr);

//  *****************************************************
const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Batman", "Flash"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros); // only 2 array
// console.log(allHeros);

// const allHeros = [...marvelHeros, ...dcHeros, ...myHeros]; // so many array
// console.log(allHeros);

// const anotherArray = [
//   1,
//   3,
//   4,
//   0,
//   [3, 6, 7],
//   ["rahul", "CSE", [49, 26, [90, 91, 94]]],
// ];
// console.log(anotherArray);
// console.log(anotherArray.flat(Infinity));

console.log(Array.isArray("Rahul Dey"));
console.log(Array.from("Rahul "));
console.log(Array.from({ name: "Rahul" })); // it does not work like that

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

const gameName = new String("call of duty");

// console.log(gameName[3]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('d'));

const name = "Rahul";

console.log(`Hello my name is ${name} and nowdays I am playing ${gameName}.`);

const url = "https://rahul.com/rahul%20dey";

console.log(url.replace("%20", "-"));
console.log(url.includes('rahul'));
console.log(url.split('/'));

const anotherString = "         Giving so much Space.                 ";
console.log(anotherString.trim());

console.log(gameName.slice(-9,9));
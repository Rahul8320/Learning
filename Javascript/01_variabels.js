const accountId = 23134;
let accountEmail = "rahul@gmail.com";
var accountPassword = "1234"; // ❌❌❌❌❌❌
accountCity = "Bankura";
let accountState;

/*
🚀 Please avoid use of var 🙆‍♂️
 Because of it's block scope and functioal scope issue.
 if anyone declare a varibel using var in block scope with same name(Ex. accountPassword) if this varibale value
 changes the outer scope variable value also changes
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

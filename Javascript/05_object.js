// singleton
// Object.create

const course = new Object({
  name: "JS in hindi",
  price: 999,
  courseInstructor: "Chai aur code",
});
// console.log(course);

// console.log(course.courseInstructor);

// const { courseInstructor } = course;
// console.log(courseInstructor);

const { courseInstructor: instructor } = course;
console.log(instructor);

// object literals
const mySymbol = Symbol("Key1");

const jsUser = {
  name: "Rahul",
  "full name": "Rahul Dey",
  [mySymbol]: "my key 1",
  age: 18,
  location: "Bankura",
  email: "rahul@gmail.com",
  isLoggedIn: false,
  lastLogedInDays: ["Monday", "Friday"],
};

jsUser.greeting = function () {
  console.log(`Hello js user, ${this.name}`);
};

// Object.freeze(jsUser); // it will freeze the object so that it value can't be changed!

// jsUser.email = "admin@gmail.com";

// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);
// console.log(jsUser.lastLogedInDays);

// jsUser.greeting();

// console.log(Object.keys(jsUser));
// console.log(Object.values(jsUser));
// console.log(Object.entries(jsUser));

// console.log(jsUser.hasOwnProperty("email"));

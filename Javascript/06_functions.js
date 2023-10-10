function calculateCartPrice(...items) {
  // rest operator (rest of all)
  return items;
}

// console.log(calculateCartPrice(100, 200));
// console.log(calculateCartPrice(100, 200, 400, 500));

const user = {
  username: "Rahul",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website!`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   console.log(this);
// }
// chai();

const chai = () => {
  console.log(this);
};
// chai();

// ======================= IIFE =========================
// Immediately Invoked Function Expressions

// named IIFE
(function chai() {
  console.log("DB Connected!");
})();

// unnamed parameterise IIFE
((app) => {
  console.log(`DB Connected from ${app}`);
})("Node");

/*
1. What is this in JavaScript?
this refers to the object that is executing the function.

But in JavaScript, this is dynamic – its value depends on how a function is called, not just where it's defined.

different cases of this -
1. console.log(this); // In browser, this = window

2. Inside a function (non-strict mode):
function test() {
  console.log(this);
}
test(); // `this` is the global object (window in browser)

3. Inside a method:
const obj = {
  name: "Om",
  greet() {
    console.log(this.name);
  }
};
obj.greet(); // "Om" — `this` refers to obj

4. Inside a constructor function:
function User(name) {
  this.name = name;
}
const u = new User("Om");
console.log(u.name); // "Om" — `this` refers to the new object




Q. What is .call() in JavaScript?
.call() is a method of all functions. It lets you manually set the value of this and call the function immediately.
ex:-

function greet() {
  console.log("Hello, " + this.name);
}

const user = { name: "Om" };
greet.call(user); // Hello, Om



*/

function setUsername(username) {
  this.username = username; // here this represent the obj of fn createuser so set the value of username inside that object.
}

function createUser(username, email, password) {
  setUsername.call(this, username); // here we are sending the this of createUser fn new object
  // here call passing the current execution context to anathor function.

  this.email = email; //here this refer to the obj which is formed by {new createUser() }
  this.password = password; // here we are setting the value of property(email,password) coming from constructor fn parameter.
}
const alpha = new createUser("chai", "chai@gmail.com", "123");
const gama = new createUser("donald", "donald@maga", "duck");
console.log(alpha);
console.log(gama);

// -----------------Sharing Method Between Objects-----------------------------------
const user1 = {
  name: "Om",
  greet: function () {
    console.log("Hi, " + this.name);
  },
};

const user2 = {
  name: "Singh",
};

user1.greet(); // Hi, Om
user1.greet.call(user2); // Hi, Singh ✅ — changes `this` to user2

// -------------------------With Arguments--------------------------------
function sayHi(age, city) {
  console.log(`Name: ${this.name}, Age: ${age}, City: ${city}`);
}

const person = { name: "Om" };

sayHi.call(person, 25, "Mumbai");
// Name: Om, Age: 25, City: Mumbai

//--------------------------call & apply---------------------------------------

// Difference Between .call() and .apply()
// Both are used to change this, only difference is how arguments are passed.

sayHi.call(person, 25, "Mumbai"); // args as separate values
sayHi.apply(person, [25, "Mumbai"]); // args as array

//---------------------------bind------------------------------------

// .bind() is like .call(), but it does NOT call the function immediately.
// It returns a new function with this permanently set.

const greetOm = sayHi.bind(person, 25, "Mumbai");
greetOm(); // Name: Om, Age: 25, City: Mumbai

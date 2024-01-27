//**************************creating object literals****************************************************** */

const user = {
  username: "om singh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    console.log(this); //here this represent current context i.e user.
  },
};

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // Here this represent empty object.

//**********************constructor function******************************************************************************************** */

// constructor - it basically allow us to create multiple instances of single object literals.

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

// if we create instances without constructor fn then it overwrite the value of first instances into second instances.
// const userOne = User("hitesh", 12, true);
// const userTwo = User("ChaiAurCode", 11, false);

// console.log(userOne);                 //they print the value of second instances.

// Here new is constuctor function.

const userOne = new User("om singh", 12, true);
const userTwo = new User("Chai", 11, false);
console.log(userOne.constructor); // here userOne is the reference of User so,
console.log(userOne);
console.log(userTwo);

//********************************** */ Importance of new keywords **************************************

//1. It create empty object i.e caled instances.
//2. constructor fn is called due to new keywords, & it pack all argument and it.
//3. this keywords all argument is inject into fn.
//4. function will get.

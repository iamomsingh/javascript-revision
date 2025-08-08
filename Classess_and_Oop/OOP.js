//**************************creating object literals****************************************************** */

const user = {
  username: "om singh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    console.log(this); //here this represent current context i.e user.(those who are calling is current context here user object is calling)
  },
};

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // Here this represent empty object.
// In browser this represent window object(Global object)

//**********************constructor function******************************************************************************************** */

// constructor - it basically allow us to create multiple instances of single object literals.

function User(username, loginCount, isLoggedIn) {
  this.username = username; //here we are using this to make difference between variable and parameter value & also to pass the variable into constructor fn.
  this.loginCount = loginCount;
  this.isLogged = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this; //here we are returning user object & it is optional to send this
}

// if we create instances without constructor fn then it overwrite the value of first instances into second instances.
// const userOne = User("hitesh", 12, true);
// const userTwo = User("ChaiAurCode", 11, false);

// console.log(userOne);                 //they print the value of second instances.

// Here new is constuctor function & gave new instances each time when it get called.

const userOne = new User("om singh", 12, true);
const userTwo = new User("Chai", 11, false);
console.log(userOne.constructor); // here userOne is the reference of User so,
console.log(userOne);
console.log(userTwo);
console.log(typeof userOne);
console.log(userOne.greeting());

//********************************** */ Importance of new keywords **************************************
// when we use new then these things will happen behind the scene.
//1. It create empty object i.e it create new instances of the fn(just like we create instances of class in java).
//2. constructor fn is called due to new keywords, & it pack all of its argument inside which. (just like in java we send argument more likely value to property by calling constructor through object initialization)
//3. this keywords all argument is inject into fn.(in java we assign value to property through constructor fn and this keywords)
//4. new object will get. (just like in java we created a new instance of class called object )

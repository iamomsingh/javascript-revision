function multiply(num) {
  return num * 5;
}

multiply.power = 2;

console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype); //here {} is a 'this' of by default method of prototype.

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

//**********we can create prototypical fn to injecting fn into prototype as a property*************************************** */

createUser.prototype.increment = function () {
  //Here we are injecting increment method in createUser fn as aprototype.
  this.score++;
};

createUser.prototype.printMe = function () {
  //Here we are injecting printMe method in createUser fn as a prototype.
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);

console.log(chai.printMe()); //we can access the prototype printMe.
console.log(typeof chai.printMe); // data type of printMe is Function.

//Notes:-

/*

Here's what happens behind the scenes when the new keyword is used:

1. A new object is created: The new keyword initiates the creation of a new JavaScript object.

2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has     access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

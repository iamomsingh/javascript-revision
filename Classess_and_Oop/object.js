// Function----------->
// Array-------------->  Object----------> null
// String------------->
// all the types at the end all of them are object and show all the property of  objects

function multiply(num) {
  return num * 5;
}

multiply.power = 2;

console.log(multiply(5));
console.log(multiply.power); // here function behave as a Objects accessing the property via .dot way.
console.log(multiply.prototype); //here {} is a 'this' of by default method of prototype.
console.log(typeof multiply);

function Car(username, score) {
  this.username = username;
  this.score = score;
}

//**********we can create prototypical fn to injecting fn into prototype as a property or method*************************************** */

Car.prototype.increment = function () {
  //Here we are injecting increment method in createUser fn as aprototype.
  this.score++;
};

Car.prototype.printMe = function () {
  //Here we are injecting printMe method in createUser fn as a prototype.
  console.log(`price is ${this.score}`);
};

const chai = new Car("chai", 25);
const tea = new Car("tea", 250);

console.log(chai.increment());
console.log(chai.printMe()); //we can access the prototype printMe.
console.log(typeof chai.printMe); // data type of printMe is Function.
console.log(Car.prototype);

//Notes:-

/*

1. What is .prototype?

In JavaScript, every function (including constructor functions like Car) has a special property called .prototype.

When you use new Car(...) to create an object:

    JS links the newly created object to Car.prototype

    So, methods added to Car.prototype are inherited by all instances of Car





Here's what happens behind the scenes when the new keyword is used:

1. A new object {} is created.

2. That object is linked to Car.prototype (like: __proto__ = Car.prototype)

3. Inside Car(), this.brand = 100 assigns to the new object.

4. The new object is returned and stored in chai.

5. When you call chai.increment():

    5.1 JavaScript doesn't find increment directly on chai object.

    5.2 It goes up the prototype chain and finds increment on Car.prototype

    5.3 Inside increment, this still refers to chai.

    Note;-
    So prototype lets all objects created via new Car(...) share common methods, without duplicating them.



    
1. A new object is created: The new keyword initiates the creation of a new JavaScript object.

2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has     access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

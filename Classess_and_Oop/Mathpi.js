// here  we see how we can check the property of object & how we can manupulate the property of objects.

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const descriptior = Object.getOwnPropertyDescriptor(Math, "PI");
// here we are checking the property of object Math & specially of key "P"I it is mandatory to pass key of whom we want to see property.

console.log(typeof Math);
console.log(Object.keys(Math));
console.log(descriptior);

/* 
  {
  value: 3.141592653589793,       constant value of pi
  writable: false,        here writable is flase that we can't change value[it is deeply harcoded false in node so that we can't override them]
  enumerable: false,
  configurable: false
}
*/

//----------------------------Making changes in descriptor of property of object----------------------------------------------------
// if we can also set the property of object by this here we can change the property descriptor by selection property flag & change them.

const chai = {
  name: "adharak chai",
  price: 250,
  isAvailable: true,
};

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// here we are getting the descriptor of property "name" of the object chai.
/*
{
  value: 'adharak chai',
  writable: true,
  enumerable: true,
  configurable: true
}
  */

// we can change the descriptor manually

Object.defineProperty(chai, "name", {
  writable: false, //here we are changing writable flase, so nobody can override the value
  enumerable: false, // enumerable is flase means we can't do loopin to this property.
});

for (let [key, value] of Object.entries(chai)) {
  //we can also take for in loop for object
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`); //we cant loop the property name of object chai b/c enumerable is false.
  }
}

// using for in loop for iteration of object
for (const key in chai) {
  if (typeof chai[key] !== "function") {
    console.log(`${key} : ${chai[key]}`);
  }
}

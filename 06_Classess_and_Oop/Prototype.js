let myHero = ["thor", "spiderman"];

let heroPower = {
  thor: "hamer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

heroPower.getSpiderPower();
// heroPower.yasika();      //the method yasika() is not exist in object.

//To access new method from objects we have to first create that method in prototype of datatypes or else main object.

Object.prototype.yasika = function () {
  console.log(
    "this prototype fn is created in Object, main point to all data types."
  );
};

heroPower.yasika(); //here heroPower object is accesing yasika() methods from prototypes of objects.
myHero.yasika(); // even array can also access the method yasika() because behind the scene all data types are objects and can access all the property & methods of the objects.

// if we create this method to specific datatype instead of object then that cretaed method is not accessable to all data types
// Only accessiable to that particular data types

Array.prototype.heyYasika = function () {
  console.log("This prototype fn is created in Array");
};

myHero.heyYasika();
// heroPower.heyYasika(); // the prototype fn is created in Array so it can't be available for all data-types like objects &....

// ----------------------------Inheritance through prototype------------------------------------------------------------------

const User = {
  name: "om",
  email: "om@gmail",
};
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, // this get the full access of teachingSupport prototype
};

Teacher.__proto__ = User; //Teacher can access all property of user

// modern syntex
Object.setPrototypeOf(TeachingSupport, Teacher); //this is the modern way to do prototypical Inheritance

// -------------------------create method that can give full length of string with trim---------------------

let bigName = "   om singh           ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is : ${this.trim().length}`);
};

bigName.trueLength(); // 8
"    larva".trueLength(); // we can access this trulength() prototype method on every string.

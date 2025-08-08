//Function Declaration

function addNumber(num1, num2) {
  //parameter
  if (!num1 && !num2 && typeof num1 === String && typeof num2 === String) {
    console.log("please Enter a valid number");
    return;
  }
  console.log(num1 + num2);
  // let result = num1 + num2;
  // return result;
  return num1 + num2;
}

const res = addNumber("a", "b"); //fn reference & execute and saving return value from fn to variable res.
console.log(`Result: ${res}`);
//we pass argument to fn from here.

function calPrice(...num) {
  //rest operator
  return num;
}

console.log(calPrice(200, 400, 600, 34, 54));

//passing object to fn:-
const obj = {
  name: "om",
  price: 185,
};

function handleObject(anyObject) {
  console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}

handleObject(obj); //passing obj as a argument
handleObject({ name: "Raju", price: 5000 });

//passing array to a fn as a parameter
const arr = [2, 45, 6, 78, 98, 34];

function handleArray(getArray) {
  console.log(getArray[3]);
}

handleArray(arr);
handleArray([2, 45, 6, 94, 98, 34]);

//************************scope & closure************************* */

function one(user) {
  const userName = "om singh";

  function two() {
    const website = "google";
    console.log(userName);
  }
  //console.log(website);                //not in scope
  console.log(`hi user you r executing ${user} device`);
  two();
}

one("om");

//****************************This*********** */

const user = {
  name: "om",
  price: 455,

  welcomeMessage: function () {
    console.log(`${this.name}, Welcome to website`);
    console.log(this); //here this represent user object
  },
};

user.welcomeMessage();
user.name = "Raja";
user.welcomeMessage();

console.log(this); //here this represent empty obj.

function chec() {
  let username = "om";

  console.log(this);
  //   console.log(this.username)        //in fn this not work
}

chec();

const checks = () => {
  console.log(this); //give empty obj
};

checks();

//***************arrow fn****************** */

const addTwo = (num1, num2) => {
  //when using curly then return is used
  return num1 + num2;
};
addTwo(3, 4);

const addThree = (num1, num2, num3) => num1 + num2 + num3;
addThree(3, 4, 5);

const addNum = (num1, num2) => num1 + num2; //when using braces no return is used
addNum(5, 6);

const addobj = () => ({ name: "om" });
addobj();

//Immediately Invoked Function Expression (IIFE)***********************

//this is basically used to neglect the global scope interfere & immediatelly execute
//for executing we use another ()
// ; is must imp to use otherwise other iife not execute

(function chai() {
  console.log(`DB connected......`);
})();

((name) => {
  console.log(`Hello my name is ${name}`);
})("om singh");

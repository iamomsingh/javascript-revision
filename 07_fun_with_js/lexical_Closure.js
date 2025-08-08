// ----------------------Lexical Scoping-----------------------------------------------

function outer() {
  let username = "om singh";

  //  console.log("Outer", secret);          //outer fn can't access inner fn property

  function inner() {
    let secret = "my1235";
    console.log("inner", username); //inner fn can access the outer fn variable{child can access parent property}
  }

  function innerTwo() {
    console.log("innerTwo", username);
    // console.log(seret); // sibbling fn also cant access the property[brother not sharing propeerty]
  }

  inner();
  innerTwo();
}

outer();
// console.log("Too OUTER", username);                 // out of scope variable.

//--------------------------------closure--------------------------------------------------

function makeFunc() {
  const name = "linux";

  function displayName() {
    console.log(name);
  }

  return displayName; // here we are returning the lexical scoping of inner fn
}

const myFunc = makeFunc();
myFunc();

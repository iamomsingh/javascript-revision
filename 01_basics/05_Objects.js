//Object Declarations

//1. Constructor declaration   -------------- [Singelton object]
const obj = new Object()      //create object object

  //symbol declaration
  const symbol = Symbol("key1")


//2. object literals declaration       --------[Non-singelton object]
const user = {
    name: 'om singh',
    "full name": 'Ranawaut',
    age: 18,
    email: 'om@gmail.com',
    location: 'Ranchi',
    loginIn: true,
    lastLogedIn: ['Monday', 'Wednesday'],
    [symbol]: 'mySumbol',
}

console.log(user)
console.log(user.name)        //dot notation
console.log(user["full name"]);
console.log(user['full name']);     //bracket notation - mostly used when key is not single in obj.
console.log(user[symbol]);

user.email = 'iamomsingh11@gmail.com';
// Object.freeze(user);

user.greeting = function(){
  console.log(`Hello to learning....`)
}

user.greetingTwo = function(){
  console.log(`Hello to learning, , ${this.name}`)
}

console.log(user.greeting());
console.log(user.greetingTwo());
console.log(user);


//----------combining object---------------------

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'a', 4: 'b'};

//1. assign method
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

//2. spread operator
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);


//*****************Methods************************************* */

//getting keys & values of obj
console.log(Object.keys(obj4));
console.log(Object.values(obj4));

console.log(Object.length);
console.log(Object.entries(obj4));
console.log(obj4.hasOwnProperty('islogin'));

//Destructuring of obj
const { name, age, email: ema} = user;
console.log(name);
console.log(ema);
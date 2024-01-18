// Primitive data types

// Number
// BigInt
// String
// Boolean
// null         typeof null is object
// undefined
// Symbol       uniqueness  


// Object data types (Non-primitive data types) (Reference data types)

// Array
// Objects
// Functions



//  Notes :-

//javascript is a dynamically typed languages.   -> data types of variables are determined by values at runtime.
// javascript kept data in two types :-
// 1. Stack (Primitive)
// 2. Heap (Non-Primitive)
// Stack means it copy value.
// Heap means it give reference of value.

//---------------------------------------------------------------------------------------------------------------------------------!
// Practice


// checking data type
console.log(typeof null);             //object
console.log(typeof undefined);        //undefined
console.log(typeof String);           //function


//  Conversion of data types
let score = '33';
let value = null

let valueInNumber = Number(score);
let valueInString = String(score);
let valueInBoolean = Boolean(score);
let valueInNull = Number(value)

console.log(valueInNumber);
console.log(valueInString);
console.log(valueInBoolean);           // if there is value then it is 1 otherwise 0
console.log(valueInNull);              // conversion of null value to number gives 0

// "33" -> 33
// "33asd" -> NAN 
//  true  ->  1  && false -> 0
//  null  -> 0
// undefined -> NAN



// ******************

//comparision of value

console.log('2' > 1);             // it convert automatically string to num & then compare
console.log('02' > 1);
console.log(null > 0);            // conversion of null to num gives 0 only in comparisons
console.log(null == 0);           //equlaity check work differently than comparision work
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);


//  symbol
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

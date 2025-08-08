//Deceleration of array

const arr = [1, 2, 3, 4, 5, "shaktiman"]; // literal- array declaration
const arr1 = new Array(3, 4, 5, 6, 7, 8); //constructor-declaration of array abj

//Array makes shallow copy - means same reference points (change the value at main array)

console.log(arr[4]);
console.log(typeof arr);
console.log(typeof arr1);

//Array Methods

const pus = arr.push(56); //add value to last of arr
console.log("pus:", arr);

const pop = arr.pop(); //remove value to last of arr
console.log("pop:", arr);

const uns = arr.unshift(9); //add value to first of arr
console.log("unshift:", arr);

const sh = arr.shift(); //remove value from first of arr
console.log("shift:", arr);

const inc = arr.includes(9);
console.log("include:", inc);

const ind = arr.indexOf(5);
console.log("index:", ind);

const newArr = arr.join();
console.log("join:", newArr);

//---slice &&&&&  splice
console.log("A", arr);

const arr2 = arr.slice(1, 4); //in slice it print arr of given index but not remove original arr.
console.log(arr2);
console.log("B", arr);

const arr3 = arr.splice(1, 4); //in splice it remove the element from original array & also include last index
console.log(arr3);
console.log("c", arr);

//Adding array------

//1. push
//2. concat
const arr4 = arr.concat(arr1);
console.log("D", arr4);

//3. spread
const arr5 = [...arr, ...arr1, ...arr2];
console.log("E", arr5);

//4. combine nested array into single
const nestingArray = [1, 2, 3, [5, 6], 7, [8, [3, 4]]];
const mergeNestingArray = nestingArray.flat(Infinity);
console.log(mergeNestingArray);

//checking Array & forming
console.log(Array.isArray("om singh"));
console.log(Array.isArray(arr));
console.log(Array.from("Rajput")); //forming arr from string
console.log(Array.from({ name: "Rahul" })); //interesting here they don't know how to form the array from key or value of obj.

let sc1 = 100;
let sc2 = 200;
let sc3 = 300;

console.log(Array.of(sc1, sc2, sc3)); //forming new array from group of element & element is anyting.

// Array more method

/*
at: function at()
​​
concat: function concat()
​​
constructor: function Array()
​​
copyWithin: function copyWithin()
​​
entries: function entries()
​​
every: function every()
​​
fill: function fill()
​​
filter: function filter()
​​
find: function find()
​​
findIndex: function findIndex()
​​
findLast: function findLast()
​​
findLastIndex: function findLastIndex()
​​
flat: function flat()
​​
flatMap: function flatMap()
​​
forEach: function forEach()
​​
includes: function includes()
​​
indexOf: function indexOf()
​​
join: function join()
​​
keys: function keys()
​​
lastIndexOf: function lastIndexOf()
​​
length: 0
​​
map: function map()
​​
pop: function pop()
​​
push: function push()
​​
reduce: function reduce()
​​
reduceRight: function reduceRight()
​​
reverse: function reverse()
​​
shift: function shift()
​​
slice: function slice()
​​
some: function some()
​​
sort: function sort()
​​
splice: function splice()
​​
toLocaleString: function toLocaleString()
​​
toReversed: function toReversed()
​​
toSorted: function toSorted()
​​
toSpliced: function toSpliced()
​​
toString: function toString()
​​
unshift: function unshift()
​​
values: function values()
​​
with: function with()
​​
Symbol(Symbol.iterator): function values()
​​
Symbol(Symbol.unscopables): Object { at: true, copyWithin: true, entries: true, … }

*/

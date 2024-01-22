//Numbers

const score = new Number(123.6778);            //define as object Number

console.log(typeof score);
console.log(score.toString().length);
console.log(score.toFixed(2));
console.log(score.toExponential(2));
console.log(score.toLocaleString('en-IN'));
console.log(score.toPrecision(5));
console.log(score.valueOf());



//--------------------------------MAths-------------------------------------------------------------------------------


//Math object have several methods

console.log(Math);
console.log(typeof Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.floor(5.6));
console.log(Math.ceil(9.8));
console.log(Math.min(2,5,7,9));
console.log(Math.max(34,5,7,23));
console.log(Math.random());
console.log((Math.random()*10) + 1 );
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;  
const max = 20;

console.log(Math.floor(Math.random()* (max-min+1)) + min);



//***********************************************************Dates********************************************************* */

let myDate = new Date();

console.log(typeof myDate);
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours().toLocaleString());
console.log(myDate.getMinutes());
console.log(myDate.getMonth());
console.log(myDate.getTime().toLocaleString());


// create date

let createDate1 = new Date(2023, 0, 18);
let createDate2 = new Date(2023, 0, 18,5,3);
let createDate3 = new Date("01-18-2024");

console.log(createDate1.toLocaleDateString());
console.log(createDate2.toLocaleString());
console.log(createDate3.toLocaleString());


//-----------TimeStamps----------------
let myTimeStamps = Date.now();

console.log(myTimeStamps);
console.log(createDate3.getTime());
console.log(Math.floor(Date.now()/1000));

// myDate.toLocaleString('default', {
//     weekday: 'long',
//     timeZone: 'new-delhi',
//     timeZoneName: 'long',

// })

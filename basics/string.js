/* 
Theory

Q. difference between slice & substring

   slice(indexStart, indexEnd)
   1. if indexstart is negative -> start from negative value
   2. it indexEnd value is not included. means (3,9)-> it gave str from index 3 to 8
   3. if Start > End -> it gave ' ' (empty) string.
   4. if (-8, -4) -> start from -8 & goes to -4.
   5. if (-8, 4) -> -8 > 4 so it return ''(empty).
   6. if (8, -4) -> produce value.



   substring(indexStart, indexEnd)
   1. if start is negative -> they view negative as o & start from Zero.
   2. here same indexEnd not included.
   3. if start > End -> it sweap value means (13,6) -> (6 , 13).
   4. if (-8, -4) -> start from 0 & goes to 0, means ''(empty) string.
   5. if (-8, 4) -> start from 0 to 4.
   6. if (8, -4) -> start from 0 to 8, it sweap value. 



*/
// --------------------------------------------------------------------------------------------------------------------------------------




const str = 'hello i am om'   // it is string primitive it does not have any method 


const name = new String('om singh');          //here string as a object string.

console.log(`Hello my name is ${name}`);

//String Methods
console.log(name.charAt(3));
console.log(name.at('1'));
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.indexOf('s'));          //search value from start
console.log(name.concat(` i'm the boss of this world`));
console.log(name.constructor());
console.log(name.endsWith('singh'));
console.log(name.includes('d'));
console.log(name.lastIndexOf('o'));      //search value from end
console.log(name.repeat(2));
console.log(name.replace('om' , 'mohan'));
console.log(name.substring(1,4));         //last index not included ,  if value is negative it treat as 0, start > stop -> it sweap value
console.log(name.slice(-5, 2));          // start > stop -> empty string, 
console.log(name.split(' '));            //return array with split value
console.log(name.padStart(10));          //give padding to string from start
console.log(name.padStart(10, 'foo'));
console.log(name.padEnd(10, 'foo'));
console.log(name.localeCompare('mno'));         //compare with value and provide boolean.
console.log(name.search(/wtf/i));              //here i means ignore case sensitive & return index value if match text.
console.log(name.match('sin'));                //it return an array.
console.log(name.match(/sin/g));
console.log(name.matchAll(/ain/gi));
console.log(name.replace('singh', (match) => match.toUpperCase()));          //here we are replacing to fn.
console.log(name.replace(/om/gi, 'Raja'));                                   // here we use regex to replace
console.log(name.replaceAll('om', 'sdsadfsdaf'));             //replace all om
console.log(name.charCodeAt(0));                         //it is used when emoji or other string used.
console.log(name.codePointAt(3));
console.log(name.toLocaleUpperCase('tr'));                 //here we convert to lacale turkish

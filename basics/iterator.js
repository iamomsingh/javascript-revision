// Loop specific to Array.

// ["", "", ""]
// [{}, {}, {}]
    

//**************************** For of ************************************************************************
// for (const iterator of object) {      here object doen't means of real object, it means on which loop will iterate(arr,str..).

// }



// 1. here object is Array
const arr = [1,2,3,4,5]
for (const num of arr) {        
    console.log(num);   
}

// 2. here object is String
const greetings = 'Hello world!';
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


//Maps  - it is basically a obj with unique property.

const map = new Map();
map.set('In', "INDIA");
map.set('USA', "United state of America")
map.set('Fr', "France")

console.log(map);

// 3. here object is map

for (const [key,value] of map) {
    console.log(key, ':-', value );
}


// 4. here object is Object
const myobj = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for (const [key, value] of myobj) {        //Here object is not iterable in 'for of'.
//      console.log(key, ':-', value );     
// }


//**************************** For In *************************************************************************** */

// Syntax of For In
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// } 

// 1. here object is object
const myobject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

for (const key in myobject) {
    console.log(`${key}  is for ${myobject[key]}`);
}


//2. here object is array
const prog = ['java', 'php', 'HTML', 'CSS']
for (const key in prog) {
    console.log(`major programming language are: ${prog[key]}`);
}

//3. here object is map
for (const [key,value] in map) {           //map are not iterable in 'for in' lopp.
    console.log(key, ':-', value );
}


//********************************************************************************************************************** */

//---------------------------  Array looping property(method)  ------------------------------------------------------------------

// 1. ************* forEach method

const coding = ['java', 'php', 'HTML', 'CSS']

coding.forEach( (item,index,arr) => {
    console.log(index,item,arr);           //inside fn is called callback function.
})         

//another way to pass callback fn.
function print(cod){
    console.log(cod)
}

coding.forEach(print);   



//when many obj in array comes from database then apply forEach loop
const myCoding = [
    {languageName: "HTML",
     languageFileName: "html"
    },
    {languageName: "CSS",
     languageFileName: "CSS"
    },
    {languageName: "JAVASCRIPT",
     languageFileName: "js"
    },
    {languageName: "NODE",
     languageFileName: "node"
    },
    {languageName: "REDUX",
     languageFileName: "rx"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
    console.log(item.languageFileName)
})


//foreach loop not return value...
const values = myCoding.forEach( (item) => {
    return item                         //it will not return value
})

console.log(values); 


//************************Filter************************************* */

const myNums =  [1,2,3,4,5,6];

const newNums = myNums.filter( (num) => num > 4 )

console.log(newNums);

//if we want to get value from foreach method.
const newArr = []
myNums.forEach( (num) => {
    if(num > 2) {
        newArr.push(num);
    }
})
console.log(newArr);



//*********************** Map  ****************************************************/

const myNumber =  [1,2,3,4,5,6];

const newNumber = myNumber.map( (num) => num + 10 )
console.log(newNumber);


//chaining methods

const newNumbe = myNumber
                 .map( (num) => num * 10)
                 .map( (num) => num + 1)
                 .filter( (num) => num >= 40)

console.log(newNumbe)  



//****************** Reduce ****************************** */

// it is basically used in shopping cart to add price.

//syntax
const myTotal = myNumber.reduce( ( acc, currval ) => {
    console.log(`accumulator: ${acc} and currentValue: ${currval}`);
    return acc + currval;
}, 0 );

console.log(myTotal);
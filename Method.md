# String Method

1. **charAt(index)**: Returns the character at the specified index.
```javascript
const str = "Hello";
console.log(str.charAt(0)); // Output: "H"

```

2. **charCodeAt(index)**: Returns the Unicode value of the character at the specified index.

```javascript
const str = "Hello";
console.log(str.charCodeAt(0)); // Output: 72

```
3. **concat(str1, str2, ...)**: Combines the text of two or more strings and returns a new string.

```javascript
const str1 = "Hello";
const str2 = " World";
console.log(str1.concat(str2)); // Output: "Hello World"

```

4. **indexOf(searchValue, startIndex)**: Returns the index of the first occurrence of a specified value in a string.
```javascript
const str = "Hello World";
console.log(str.indexOf("o")); // Output: 4

```

5. **lastIndexOf(searchValue, startIndex)**: Returns the index of the last occurrence of a specified value in a string.

```javascript
const str = "Hello World";
console.log(str.lastIndexOf("o")); // Output: 7

```

6. **slice(startIndex, endIndex):** Extracts a section of a string and returns it as a new string.
```javascript
const str = "Hello World";
console.log(str.slice(0, 5)); // Output: "Hello"

```
   
7. **substring(startIndex, endIndex):** Similar to slice(), but does not allow negative indexes.
```javascript
const str = "Hello World";
console.log(str.substring(0, 5)); // Output: "Hello"

```


8. **substr(startIndex, length):** Extracts a specified number of characters from a string, starting at the specified index.
```javascript
const str = "Hello World";
console.log(str.substr(6, 5)); // Output: "World"

```


9. **toUpperCase():** Converts all characters in a string to uppercase.
```javascript
const str = "hello";
console.log(str.toUpperCase()); // Output: "HELLO"

```

10. **toLowerCase():** Converts all characters in a string to lowercase.
```javascript
const str = "HELLO";
console.log(str.toLowerCase()); // Output: "hello"

```

11. **split(separator, limit):** Splits a string into an array of substrings.
```javascript
  const str = "Om Singh";
  console.log(str.split(" "))  // output: ["Om", "Singh"]
```

12. **toString():** This method is not specific to string objects but is a method available on all JavaScript objects, including strings. It is used to convert any JavaScript object to a string representation.
```javascript
const str = "Hello";
console.log(str.toString()); // Output: "Hello"

```

13. **constructor:** This property that references the constructor function that creates an object. For primitive types like strings, the constructor property refers to the built-in `String` constructor function.

```javascript
const str = new String("Hello");
console.log(str instanceof String); // Output: true
console.log(str); // Output: [String: 'Hello']

```

14. **includes(searchString, position)** Checks if a string contains another character within it.

```javascript
const str = "Hello World";

console.log(str.includes("Hello")); // Output: true
console.log(str.includes("World")); // Output: true
console.log(str.includes("foo"));   // Output: false

```

15. **trim():** It is used to remove whitespace from both ends of a string.
```javascript
const str = "   Hello, World!   ";
const trimmedStr = str.trim();
console.log(trimmedStr); // Output: "Hello, World!"

```

16. **startsWith(searchString, position):** Checks if a string starts with the specified characters.
```javascript
const str = "Hello World";
console.log(str.startsWith("Hello")); // Output: true

```

17. **endsWith(searchString, length):** Checks if a string ends with the specified characters.
```javascript
const str = "Hello World";
console.log(str.endsWith("World")); // Output: true

```

18. **replace(searchValue, newValue):**  Replaces text in a string with new text.

```javascript
const str = "Hello World";
console.log(str.replace("World", "Universe")); // Output: "Hello Universe"

```


19. **search(regexp):** Searches a string for a specified value and returns the position of the match.
```javascript
const str = "Hello World";
console.log(str.search(/World/)); // Output: 6

```
20. **padStart(targetLength, padString):** Pads the current string with another string until the resulting string reaches the given length.
```javascript
const str = "5";
console.log(str.padStart(3, "0")); // Output: "005"

```
21. **padEnd(targetLength, padString):** Pads the current string with another string until the resulting string reaches the given length.
```javascript
const str = "5";
console.log(str.padEnd(3, "0")); // Output: "500"

```

22. **repeat(count):** Returns a new string with a specified number of copies of the string it was called on.
```javascript
const str = "Hello";
console.log(str.repeat(3)); // Output: "HelloHelloHello"

```
---

# Number Method

> In JavaScript, the Number object is a global object that represents numeric data types. It is not an instance of the Number object, but a primitive data type. However, it has properties and methods that can be accessed through the Number object.

1. Number.MAX_VALUE: The largest representable number in JavaScript.

2. Number.MIN_VALUE: The smallest positive representable     number in JavaScript.  
3. Number.NaN: Represents "Not-a-Number" value.
4. Number.NEGATIVE_INFINITY: Represents negative infinity.
5. Number.POSITIVE_INFINITY: Represents positive infinity.
6. Number.EPSILON: Represents the difference between 1 and the smallest floating-point number greater than 1.
7. Number.MIN_SAFE_INTEGER: The minimum safe integer in JavaScript.
8. Number.MAX_SAFE_INTEGER: The maximum safe integer in JavaScript.

```javascript
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Output: 5e-324
console.log(Number.NaN); // Output: NaN
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity
console.log(Number.POSITIVE_INFINITY); // Output: Infinity
console.log(Number.EPSILON); // Output: 2.220446049250313e-16
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991

```
1. **toFixed(digits):** Returns a string representing the number in fixed-point notation with a specified number of digits after the decimal point.
```javascript
const num = 5.1234;
console.log(num.toFixed(2)); // Output: "5.12"

```
2. **toPrecision(precision):** Returns a string representing the number to a specified precision.
```javascript
const num = 123.456789;
console.log(num.toPrecision(4)); // Output: "123.5"

```
3. **toString(base):** Returns a string representing the specified object in the specified base (between 2 and 36).

```javascript
const num = 10;
console.log(num.toString(2)); // Output: "1010"

```
4. **toLocaleString():** Returns a string with a language-sensitive representation of the number.

```javascript
const num = 123456.789;
console.log(num.toLocaleString()); // Output: "123,456.789" (based on locale)

```
5. **valueOf():** Returns the primitive value of the specified object.
```javascript
const num = new Number(42);
console.log(num.valueOf()); // Output: 42

```
6. **toExponential(fractionDigits):** Returns a string representing the number in exponential notation with a specified number of digits after the decimal point.

```javascript
const num = 1234.5678;
console.log(num.toExponential(2)); // Output: "1.23e+3"

```


# Array Properties & Methods

1. **Array.length:** Returns or sets the number of elements in an array.

```javascript
const arr = [1, 2, 3];
console.log(arr.length); // Output: 3

```
2. **Array.from(iterable, mapFn, thisArg):** Creates a new Array instance from an array-like or iterable object.
```javascript
const arr = Array.from('hello');
console.log(arr); // Output: ["h", "e", "l", "l", "o"]

```
3. **Array.isArray(obj):** Returns true if the provided value is an array; otherwise, returns false.
```javascript
console.log(Array.isArray([])); // Output: true

```
4. **Array.of(element0, element1, ..., elementN):** Creates a new Array instance with a variable number of arguments.
```javascript
const arr = Array.of(1, 2, 3);
console.log(arr); // Output: [1, 2, 3]

```
5. **Array.prototype.concat(...arrays):** Returns a new array comprised of this array joined with other array(s) and/or value(s).
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2)); // Output: [1, 2, 3, 4]

```
6. **Array.prototype.every(callbackFn, thisArg):** Tests whether all elements in the array pass the test implemented by the provided function.
```javascript
const arr = [1, 2, 3];
const isPositive = (num) => num > 0;
console.log(arr.every(isPositive)); // Output: true

```
7. **Array.prototype.fill(value, start, end):** Fills all the elements of an array from a start index to an end index with a static value.
```javascript
const arr = [1, 2, 3];
console.log(arr.fill(0, 1, 2)); // Output: [1, 0, 3]

```
8. **Array.prototype.filter(callbackFn, thisArg):** Creates a new array with all elements that pass the test implemented by the provided function.
```javascript
const arr = [1, 2, 3];
const isEven = (num) => num % 2 === 0;
console.log(arr.filter(isEven)); // Output: [2]

```
9. **Array.prototype.find(callbackFn, thisArg):** Returns the value of the first element in the array that satisfies the provided testing function.
```javascript
const arr = [1, 2, 3];
const isEven = (num) => num % 2 === 0;
console.log(arr.find(isEven)); // Output: 2

```
10. **Array.prototype.findIndex(callbackFn, thisArg):** Returns the index of the first element in the array that satisfies the provided testing function.
```javascript
const arr = [1, 2, 3];
const isEven = (num) => num % 2 === 0;
console.log(arr.findIndex(isEven)); // Output: 1

```
11. **Array.prototype.forEach(callbackFn, thisArg):** Executes a provided function once for each array element.
```javascript
const arr = [1, 2, 3];
arr.forEach((element) => console.log(element)); // Output: 1, 2, 3

```
12. **Array.prototype.includes(valueToFind, fromIndex):** Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
```javascript
const arr = [1, 2, 3];
console.log(arr.includes(2)); // Output: true

```
13. **Array.prototype.indexOf(searchElement, fromIndex):** Returns the first index at which a given element can be found in the array, or -1 if it is not present.

```javascript
const arr = [1, 2, 3, 2];
console.log(arr.indexOf(2)); // Output: 1

```
14 **Array.prototype.join(separator):** Joins all elements of an array into a string.
```javascript
const arr = [1, 2, 3];
console.log(arr.join('-')); // Output: "1-2-3"

```

15. **Array.prototype.lastIndexOf(searchElement, fromIndex):** Returns the last index at which a given element can be found in the array, or -1 if it is not present.
```javascript
const arr = [1, 2, 3, 2];
console.log(arr.lastIndexOf(2)); // Output: 3

```
16. **Array.prototype.map(callbackFn, thisArg):** Creates a new array populated with the results of calling a provided function on every element in the calling array.
```javascript
const arr = [1, 2, 3];
const double = (num) => num * 2;
console.log(arr.map(double)); // Output: [2, 4, 6]

```

17. **Array.prototype.pop():** Removes the last element from an array and returns that element.
```javascript
const arr = [1, 2, 3];
console.log(arr.pop()); // Output: 3

```

18. **Array.prototype.push(element1, ..., elementN):** Adds one or more elements to the end of an array and returns the new length of the array.
```javascript
const arr = [1, 2, 3];
console.log(arr.push(4, 5)); // Output: 5

```

19. **Array.prototype.reduce(callbackFn, initialValue):** Executes a reducer function on each element of the array, resulting in a single output value.
```javascript
const arr = [1, 2, 3];
const sum = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(sum)); // Output: 6

```

20. **Array.prototype.reduceRight(callbackFn, initialValue):** Executes a reducer function on each element of the array (from right-to-left), resulting in a single output value.
```javascript
const arr = [1, 2, 3];
const subtract = (accumulator, currentValue) => accumulator - currentValue;
console.log(arr.reduceRight(subtract)); // Output: 0 (3 - (2 - 1))

```

21. **Array.prototype.reverse():** Reverses the elements of an array in place.
```javascript
const arr = [1, 2, 3];
console.log(arr.reverse()); // Output: [3, 2, 1]

```

22. **Array.prototype.shift():** Removes the first element from an array and returns that removed element.
```javascript
const arr = [1, 2, 3];
console.log(arr.shift()); // Output: 1

```

23. **Array.prototype.slice(begin, end):** Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3)); // Output: [2, 3]

```

24. **Array.prototype.some(callbackFn, thisArg):** Tests whether at least one element in the array passes the test implemented by the provided function.

```javascript
const arr = [1, 2, 3];
const isPositive = (num) => num > 0;
console.log(arr.some(isPositive)); // Output: true

```

25. **Array.prototype.sort(compareFn):** Sorts the elements of an array in place and returns the sorted array.
```javascript
const arr = [3, 1, 2];
console.log(arr.sort()); // Output: [1, 2, 3]

```
26. **Array.prototype.splice(start, deleteCount, item1, ..., itemN):** Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr.splice(2, 2, 'a', 'b')); // Output: [3, 4]
console.log(arr); // Output: [1, 2, 'a', 'b', 5]

```

27. **Array.prototype.toLocaleString(locales, options):** Returns a localized string representing the array and its elements.

```javascript
const arr = [1, 2, 3];
console.log(arr.toLocaleString('en', { style: 'currency', currency: 'USD' })); // Output: "$1.00, $2.00, $3.00"

```
28. **Array.prototype.toString():** Returns a string representing the specified array and its elements.
```javascript
const arr = [1, 2, 3];
console.log(arr.toString()); // Output: "1,2,3"

```
29. **Array.prototype.unshift(element1, ..., elementN):** Adds one or more elements to the beginning of an array and returns the new length of the array.
```javascript
const arr = [1, 2, 3];
console.log(arr.unshift(0)); // Output: 4
console.log(arr); // Output: [0, 1, 2, 3]

```
30. **Array.prototype.values():** Returns a new Array Iterator object that contains the values for each index in the array.
```javascript
const arr = ['a', 'b', 'c'];
const iterator = arr.values();
for (const value of iterator) {
  console.log(value);
}
// Output:
// "a"
// "b"
// "c"

```
31. **Array.prototype@@iterator:** Returns a new Array Iterator object that contains the key-value pairs for each index in the array.
```javascript
const arr = ['a', 'b', 'c'];
const iterator = arr[Symbol.iterator]();
for (const value of iterator) {
  console.log(value);
}
// Output:
// "a"
// "b"
// "c"

```
--

# Object Properties & Methods

> In JavaScript, all objects inherit properties and methods from their prototype, which could be either the built-in Object.prototype or a custom prototype. 

1. **Object.constructor:** A reference to the constructor function that created the instance.or, Specifies the function that creates an object's prototype.
```javascript
const obj = {};
console.log(obj.constructor === Object); // Output: true

```
2. **Object.prototype.toString():** Returns a string representing the object.

```javascript
const obj = {};
console.log(obj.toString()); // Output: "[object Object]"

```
3. **Object.prototype.valueOf():** Returns the primitive value of the specified object.

```javascript
const obj = {};
console.log(obj.valueOf()); // Output: {}
const obj = { a: 1 };
console.log(obj.valueOf()); // Output: { a: 1 }

```
4. **Object.assign(target, ...sources):** Copies the values of all enumerable own properties from one or more source objects to a target object.
```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // Output: { a: 1, b: 2 }

```
5. **Object.create(proto, [propertiesObject]):** Creates a new object with the specified prototype object and properties.
```javascript
const proto = { x: 10 };
const obj = Object.create(proto);
console.log(obj.x); // Output: 10

```
6. **Object.defineProperties(obj, props):** Defines new or modifies existing properties directly on an object, returning the object.
```javascript
const obj = {};
Object.defineProperties(obj, {
    'property1': {
        value: true,
        writable: true
    },
    'property2': {
        value: 'Hello',
        writable: false
    }
});
console.log(obj.property1); // Output: true

```
7. **Object.defineProperty(obj, prop, descriptor):** Defines a new property directly on an object, or modifies an existing property, and returns the object.
```javascript
const obj = {};
Object.defineProperty(obj, 'property', {
    value: 42,
    writable: false
});
console.log(obj.property); // Output: 42

```
8. **Object.entries(obj):** Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
```javascript
const obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // Output: [["a", 1], ["b", 2]]

```
9. **Object.freeze(obj):** Freezes an object: other code can't delete or change any properties.
```javascript
const obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 33; // Throws an error in strict mode
console.log(obj.prop); // Output: 42

```
10. **Object.getOwnPropertyDescriptor(obj, prop):** Returns a property descriptor for a named property on an object.
```javascript
const obj = { a: 1 };
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
// Output: { value: 1, writable: true, enumerable: true, configurable: true }

```
11. **Object.hasOwnProperty():** Returns a boolean indicating whether the object has the specified property.
```javascript
Object.prototype.hasOwnProperty(prop)

const obj = { a: 1, b: 2 };
console.log(obj.hasOwnProperty('a')); // Output: true
console.log(obj.hasOwnProperty('toString')); // Output: false

```

12. **Object.prototype.isPrototypeOf():** Returns a boolean indicating whether the object is in the prototype chain of another object.

```javascript
Object.prototype.isPrototypeOf(obj)

function Foo() {}
const fooInstance = new Foo();
console.log(Foo.prototype.isPrototypeOf(fooInstance)); // Output: true

```

13. **Object.propertyIsEnumerable():** Returns a boolean indicating whether the specified property is enumerable.

```javascript
Object.prototype.propertyIsEnumerable(prop)

const obj = { a: 1, b: 2 };
console.log(obj.propertyIsEnumerable('a')); // Output: true
console.log(obj.propertyIsEnumerable('toString')); // Output: false


```

14. **Object.prototype.toString():** Returns a string representation of the object.

```javascript
Object.prototype.toString()

```

15. **Object.getOwnPropertyDescriptors():** Returns an object containing all own property descriptors for an object.

```javascript
Object.getOwnPropertyDescriptors(obj)

const obj = { a: 1 };
console.log(Object.getOwnPropertyDescriptors(obj));
// { a: { value: 1, writable: true, enumerable: true, configurable: true } }


```

16. **Object.getOwnPropertyNames():** Returns an array of all properties (enumerable or not) found directly upon a given object.

```javascript
Object.getOwnPropertyNames(obj)

const obj = { a: 1, b: 2 };
console.log(Object.getOwnPropertyNames(obj)); // ["a", "b"]

```

17. **Object.getOwnPropertySymbols():** Returns an array of all symbol properties found directly upon a given object.

```javascript
Object.getOwnPropertySymbols(obj)

const sym = Symbol('key');
const obj = { [sym]: 'value' };
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(key)]

```

18. **Object.getPrototypeOf():** Returns the prototype of the specified object.

```javascript
Object.getPrototypeOf(obj)

const proto = {};
const obj = Object.create(proto);
console.log(Object.getPrototypeOf(obj) === proto); // true

```

19. **Object.is():** Compares whether two values are the same value.

```javascript
Object.is(value1, value2)

console.log(Object.is('foo', 'foo')); // true
console.log(Object.is({}, {})); // false

```

20. **Object.isExtensible():** Determines if an object is extensible (whether it can have new properties added to it).

```javascript
Object.isExtensible(obj)
const obj = {};
console.log(Object.isExtensible(obj)); // true

```

21. **Object.isSealed():** Determines if an object is sealed.

```javascript
Object.isSealed(obj)
const obj = {};
console.log(Object.isSealed(obj)); // false

```

22. **Object.isFrozen():** Determines if an object is frozen.

```javascript
Object.isFrozen(obj)

const obj = {};
console.log(Object.isFrozen(obj)); // false

```

23. **Object.keys():** Returns an array of a given object's own enumerable property names.

```javascript
Object.keys(obj)
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // ["a", "b"]

```

24. **Object.preventExtensions():** Prevents new properties from ever being added to an object.

```javascript
Object.preventExtensions(obj)
const obj = {};
Object.preventExtensions(obj);
obj.newProp = 42; // Throws an error in strict mode
console.log(obj.newProp); // undefined

```

25. **Object.setPrototypeOf():** Sets the prototype of a specified object to another object or null.

```javascript
Object.setPrototypeOf(obj, prototype)

const obj = {};
const proto = { x: 10 };
Object.setPrototypeOf(obj, proto);
console.log(obj.x); // 10


```

26. **Object.values():** Returns an array of a given object's own enumerable property values.

```javascript
Object.values(obj)
const obj = { a: 1, b: 2 };
console.log(Object.values(obj)); // [1, 2]

```


# Function Properties & Methods


1. **name:** Returns the name of the function.

```javascript
function example() {}
console.log(example.name); // "example"

```

2. **length:** Returns the number of arguments expected by the function.

```javascript
function example(a, b, c) {}
console.log(example.length); // 3

```

3. **apply():** Calls a function with a given this value and arguments provided as an array.

```javascript
function example(a, b) {
    return a + b;
}
const args = [1, 2];
console.log(example.apply(null, args)); // 3

```

4. **bind():** Creates a new function that, when called, has its this keyword set to a specified value.

```javascript
function example() {
    console.log(this);
}
const boundExample = example.bind({ name: 'bound' });
boundExample(); // { name: 'bound' }

or

function greet(name) {
  return `Hello, ${name}!`;
}

const greetAlice = greet.bind(null, 'Alice');
console.log(greetAlice()); // Hello, Alice!


```

5. **call():** Calls a function with a given this value and arguments provided individually.

```javascript
function example(a, b) {
    return a + b;
}
console.log(example.call(null, 1, 2)); // 3

```

6. **toString():** Returns a string representing the source code of the function.

```javascript
function example() {
    console.log('Hello');
}
console.log(example.toString()); // "function example() { console.log('Hello'); }"

```

7. **toSource():** Returns a string representing the source code of the function.

```javascript
function example() {
    console.log('Hello');
}
console.log(example.toSource()); // "function example() {\n    console.log('Hello');\n}"

```

8. **valueOf():** Returns the primitive value of the specified object (function).

```javascript
function example() {}
console.log(example.valueOf()); // example() {}

```

# Event Listener & Methods

1. **preventDefault():** Prevents the default action associated with the event from being executed.

```javascript
document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Link clicked, but default action prevented.');
});

```

2. **stopPropagation():** Prevents further propagation of the current event in the capturing and bubbling phases.

```javascript
document.getElementById('parent').addEventListener('click', function(event) {
    console.log('Parent clicked.');
});

document.getElementById('child').addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('Child clicked, but event propagation stopped.');
});

```

3. **stopImmediatePropagation():**  Prevents other listeners of the same event from being called.

```javascript
document.getElementById('parent').addEventListener('click', function(event) {
    console.log('Parent clicked.');
});

document.getElementById('child').addEventListener('click', function(event) {
    event.stopImmediatePropagation();
    console.log('Child clicked, and no other listeners will be called.');
});

document.getElementById('child').addEventListener('click', function(event) {
    console.log('Another listener for child clicked.');
});

```

4. **isTrusted:** Indicates whether the event is trusted (true) or not (false).

```javascript
document.addEventListener('click', function(event) {
    console.log(event.isTrusted); // Output: true
});

```
### Properties
5. **type:** Represents the type of the event being listened for.
```javascript
document.addEventListener('click', function(event) {
    console.log(event.type); // Output: click
});
```

2. **target:** Represents the element that triggered the event.

```javascript
document.addEventListener('click', function(event) {
    console.log(event.target); // Output: <button id="myButton">Click Me</button>
});

```

3. **currentTarget:** Represents the element that the event listener is attached to.

```javascript
document.addEventListener('click', function(event) {
    console.log(event.currentTarget); // Output: document
});

```

4. **timeStamp:** Represents the time at which the event was created, in milliseconds.

```javascript
document.addEventListener('click', function(event) {
    console.log(event.timeStamp); // Output: 1643518052847
});

```

5. **keyCode:** Returns the Unicode value of a key press.

```javascript
document.addEventListener('keydown', function(event) {
    console.log(event.keyCode); // Output: 65 for 'A'
});

```

6. **clientX and clientY:** Returns the horizontal and vertical coordinates of the mouse pointer when an event was triggered.

```javascript
document.addEventListener('mousemove', function(event) {
    console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
});

```

7. **pageX and pageY:** Returns the horizontal and vertical coordinates of the mouse pointer relative to the whole document

```javascript
document.addEventListener('mousemove', function(event) {
    console.log(`X: ${event.pageX}, Y: ${event.pageY}`);
});

```

8. **shiftKey, ctrlKey, altKey, metaKey:** Return true if the Shift, Ctrl, Alt, or Meta key was pressed during the event, respectively.

```javascript
document.addEventListener('keydown', function(event) {
    console.log(`Shift: ${event.shiftKey}, Ctrl: ${event.ctrlKey}, Alt: ${event.altKey}, Meta: ${event.metaKey}`);
});

```

9. **button:** Indicates which mouse button was pressed during a mouse event.

```javascript
document.addEventListener('mousedown', function(event) {
    console.log(event.button); // Output: 0 for left button, 1 for middle button, 2 for right button
});

```

10. **cancelable:** Indicates whether the event can be canceled using event.preventDefault().

```javascript
document.addEventListener('click', function(event) {
    console.log(event.cancelable); // Output: true
});

```

11. **bubbles:** Indicates whether the event bubbles up through the DOM or not.

```javascript
document.addEventListener('click', function(event) {
    console.log(event.bubbles); // Output: true
});

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```

 **

```javascript

```


 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```
 **

```javascript

```






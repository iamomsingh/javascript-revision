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
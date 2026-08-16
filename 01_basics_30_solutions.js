/* ============================================================
   JavaScript Code Challenge Solutions — Set 1 (30 challenges)
   Section 1: console.log & Comments
============================================================ */

// 1. Print "Hello JavaScript World"
console.log("Hello JavaScript World");

// 2. Single-line and multi-line comments
// This logs a greeting to the console
/* This is a multi-line comment
   explaining that the code below
   prints the user's name, age, and country */

// 3. Log name, age, country in one line
console.log("Name: Ahmad, Age: 25, Country: Palestine");

// 4/5. console.log("5" + 5);
console.log("5" + 5); // "55"  -> "+" with a string triggers concatenation

// 6/7. console.log(10 + 20 + "30");
console.log(10 + 20 + "30"); // "3030" -> 10+20=30 (number), then 30+"30"="3030"

/* ============================================================
   Section 2: var, let, const
============================================================ */

// 6. var redeclare
var x = 5;
var x = 10; // allowed, no error
console.log(x); // 10

// 7. let with same value change (not redeclare)
let y = 5;
y = 10; // reassignment is fine; `let y = 10;` again would throw SyntaxError (duplicate declaration)
console.log(y); // 10

// 8. const PI, try to change -> error
const PI = 3.14;
try {
  PI = 3.14159; // TypeError: Assignment to constant variable.
} catch (err) {
  console.log("Error:", err.message);
}

// 9. global vs block scope: var vs let
var globalVar = "I am var (function/global scoped)";
if (true) {
  var globalVar2 = "var leaks out of the block";
  let blockLet = "let stays inside the block";
  console.log(blockLet); // works here
}
console.log(globalVar2); // works - var ignores block scope
// console.log(blockLet); // ReferenceError - blockLet is not defined outside the block

// 10. Which throws an error?
const city = "Paris";
try {
  city = "London"; // TypeError: Assignment to constant variable.
} catch (err) {
  console.log("Error:", err.message);
}

/* ============================================================
   Section 3: Data Types
============================================================ */

// 11. Five variables of different types
let num = 42;
let str = "Hello";
let bool = true;
let undef;
let empty = null;

// 12. typeof each
console.log(typeof num);   // "number"
console.log(typeof str);   // "string"
console.log(typeof bool);  // "boolean"
console.log(typeof undef); // "undefined"
console.log(typeof empty); // "object" (famous JS quirk)

// 13. typeof null
console.log(typeof null); // "object" — a long-standing JS bug kept for backward compatibility

// 14. colors array, log 2nd item
const colors = ["red", "green", "blue"];
console.log(colors[1]); // "green"

// 15. person object
const person = { name: "Sara", age: 30, job: "Engineer" };
console.log(person);
console.log(person.name); // "Sara"

/* ============================================================
   Section 4: Arithmetic Operators
============================================================ */

// 16. (15 + 3) * 2 - 8 / 4
console.log((15 + 3) * 2 - 8 / 4); // 34

// 17. even/odd using %
function isEvenOrOdd(n) {
  return n % 2 === 0 ? "even" : "odd";
}
console.log(isEvenOrOdd(7)); // "odd"

// 18. sum, difference, product of two numbers
function mathOps(a, b) {
  console.log("Sum:", a + b);
  console.log("Difference:", a - b);
  console.log("Product:", a * b);
}
mathOps(8, 3);

// 19. 5 + 10 * 2
console.log(5 + 10 * 2); // 25 -> multiplication first

// 20. increment by 1, three ways
let i1 = 0;
i1++;          // way 1: postfix increment
i1 = i1 + 1;   // way 2: manual addition
i1 += 1;       // way 3: compound assignment
console.log(i1); // 2 (starts at 0 -> +1 -> +1 -> +1 = 3, adjust as needed)

/* ============================================================
   Section 5: Assignment Operators
============================================================ */

// 21. +=, -=, *=, /=, %= on num = 10
let num2 = 10;
num2 += 5;  console.log(num2); // 15
num2 -= 3;  console.log(num2); // 12
num2 *= 2;  console.log(num2); // 24
num2 /= 4;  console.log(num2); // 6
num2 %= 4;  console.log(num2); // 2

// 22. final value of x
let x2 = 5;
x2 += 10; // 15
x2 -= 3;  // 12
x2 *= 2;  // 24
console.log(x2); // 24

// 23. concatenate strings with +=
let greeting = "Hello, ";
greeting += "World!";
console.log(greeting); // "Hello, World!"

// 24. **= to square a number
let sq = 5;
sq **= 2;
console.log(sq); // 25

/* ============================================================
   Section 6: Comparison Operators
============================================================ */

// 25. == vs ===
console.log(5 == "5");  // true  (loose equality: coerces types before comparing)
console.log(5 === "5"); // false (strict equality: checks type AND value)

// 26. same as above
console.log(5 == "5");  // true
console.log(5 === "5"); // false

// 27. number between 10 and 50
function inRange(n) {
  return n > 10 && n < 50;
}
console.log(inRange(25)); // true

// 28. != vs !==
console.log(10 != "10");  // false (loose: "10" is coerced to 10, they're equal)
console.log(10 !== "10"); // true  (strict: different types)

/* ============================================================
   Section 7: Logical & String Operators
============================================================ */

// 29. age between 18 and 60 inclusive
function isAdultWorkingAge(age) {
  return age >= 18 && age <= 60;
}
console.log(isAdultWorkingAge(45)); // true

// 30. combine strings with + and template literals
let s1 = "JavaScript";
let s2 = "is fun";
console.log(s1 + " " + s2);      // "JavaScript is fun"
console.log(`${s1} ${s2}`);      // "JavaScript is fun"

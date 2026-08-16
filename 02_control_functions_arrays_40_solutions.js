/* ============================================================
   JavaScript Code Challenge Solutions — Set 2 (40 challenges)
   A) Control Structures (1-20)
============================================================ */

// 1. status by age
function getStatus(age) {
  let status;
  if (age < 13) status = "child";
  else if (age < 18) status = "teen";
  else status = "adult";
  console.log(status);
  return status;
}
getStatus(15); // "teen"

// 2. predict output
let x = 0;
if (x) { console.log("truthy"); } else { console.log("falsy"); } // "falsy" (0 is falsy)

// 3. positive/negative/zero
let num = -5;
if (num > 0) console.log("positive");
else if (num < 0) console.log("negative");
else console.log("zero"); // "negative"

// 4. a == b vs a === b
let a = "10", b = 10;
if (a == b) console.log("a == b is true");
else console.log("a == b is false");
if (a === b) console.log("a === b is true");
else console.log("a === b is false");
// Output: "a == b is true" (coercion), "a === b is false" (different types)

// 5. score to grade
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
console.log(getGrade(85)); // "B"

// 6. fix the logic so "warm" prints for temp = 30
let temp = 30;
if (temp >= 30) console.log("hot");        // changed > to >= ... but task wants "warm" at 30
// Correct fix to make 30 => "warm": keep hot as strictly greater than 30
if (temp > 30) console.log("hot");
else if (temp >= 20) console.log("warm");  // >= 20 so 30 falls here -> "warm"
else console.log("cold");

// 7. even/odd
function evenOrOdd(n) {
  if (n % 2 === 0) console.log("even");
  else console.log("odd");
}
evenOrOdd(4); // "even"

// 8. can-edit check
const user = { role: "editor", active: true };
if ((user.role === "admin" || user.role === "editor") && user.active === true) {
  console.log("can-edit");
}

/* A9-A16: Loops */

// 9. sum 1..100
let sum = 0;
for (let i = 1; i <= 100; i++) sum += i;
console.log(sum); // 5050

// 10. while loop 5 down to 1
let n10 = 5;
while (n10 >= 1) {
  console.log(n10);
  n10--;
}

// 11. do...while runs at least once
let count = 0;
do {
  console.log("count is", count);
  count++;
} while (count < 3);

// 12. first 10 multiples of 3
for (let i = 1; i <= 10; i++) {
  console.log(3 * i);
}

// 13. fix infinite loop
let i13 = 0;
while (i13 < 3) {
  console.log(i13);
  i13++; // missing increment was causing the infinite loop
}

// 14. factorial
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}
console.log(factorial(5)); // 120

// 15. build "#####"
let hashes = "";
for (let i = 0; i < 5; i++) hashes += "#";
console.log(hashes); // "#####"

// 16. count divisible by 2 and 5 (i.e. by 10) in 1..50
let divCount = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0 && i % 5 === 0) divCount++;
}
console.log(divCount); // 5

/* A17-A20: switch */

// 17. weekday/weekend
function dayType(day) {
  switch (day) {
    case "Mon": case "Tue": case "Wed": case "Thu": case "Fri":
      console.log("weekday");
      break;
    case "Sat": case "Sun":
      console.log("weekend");
      break;
    default:
      console.log("invalid day");
  }
}
dayType("Sat"); // "weekend"

// 18. month to season
function monthToSeason(month) {
  switch (month) {
    case 12: case 1: case 2: return "Winter";
    case 3: case 4: case 5: return "Spring";
    case 6: case 7: case 8: return "Summer";
    case 9: case 10: case 11: return "Autumn";
    default: return "Invalid month";
  }
}
console.log(monthToSeason(7)); // "Summer"

// 19. predict output
const color = "green";
switch (color) {
  case "red": console.log("stop"); break;
  case "yellow": console.log("slow"); break;
  default: console.log("go"); // this runs -> "go"
}

// 20. switch on command
function start() { console.log("Starting..."); }
function stop() { console.log("Stopping..."); }
function pause() { console.log("Pausing..."); }
function runCommand(command) {
  switch (command) {
    case "start": start(); break;
    case "stop": stop(); break;
    case "pause": pause(); break;
    default: console.log("unknown");
  }
}
runCommand("start"); // "Starting..."

/* ============================================================
   B) Functions (21-30)
============================================================ */

// 21. function declaration
function add(a, b) {
  return a + b;
}
console.log(add(3, 4)); // 7

// 22. function expression
const greet = function (name) {
  return `Hello, ${name}`;
};
console.log(greet("Nader")); // "Hello, Nader"

// 23. anonymous function in setTimeout
setTimeout(function () {
  console.log("done");
}, 500);

// 24. hoisting comparison
console.log(declared());  // "A" - function declarations are fully hoisted
// console.log(expressed()); // TypeError: expressed is not a function (only the `var`/`let` binding is hoisted, not the value)
function declared() { return "A"; }
const expressed = function () { return "B"; };
console.log(expressed()); // "B" (works once defined)

// 25. isEven
function isEven(n) {
  return n % 2 === 0;
}
if (isEven(6)) console.log("even"); else console.log("odd");

/* B6-B10: Default Parameters */

// 26. pow with default exponent
function pow(base, exp = 2) {
  return base ** exp;
}
console.log(pow(5));    // 25
console.log(pow(2, 3)); // 8

// 27. formatName
function formatName(first, last = "") {
  return `${first} ${last}`.trim();
}
console.log(formatName("John", "Doe")); // "John Doe"
console.log(formatName("John"));        // "John"

// 28. safeDivide
function safeDivide(a, b = 1) {
  if (b === 0) return "∞";
  return a / b;
}
console.log(safeDivide(10, 0)); // "∞"
console.log(safeDivide(10));    // 10

// 29. applyDiscount
function applyDiscount(price, percent = 10) {
  return price - (price * percent) / 100;
}
console.log(applyDiscount(100));     // 90
console.log(applyDiscount(100, 20)); // 80

// 30. repeatText without arrays
function repeatText(text, times = 1) {
  let result = "";
  for (let i = 0; i < times; i++) result += text;
  return result;
}
console.log(repeatText("Hi", 3)); // "HiHiHi"

/* ============================================================
   C) Objects & Arrays (31-40)
============================================================ */

// 31. book object
const book = { title: "Dune", author: "Frank Herbert", year: 1965 };
console.log(book.title); // "Dune"

// 32. add/delete property
book.pages = 412;
console.log(book);
delete book.year;
console.log(book);

// 33. fullName
function fullName(user) {
  return `${user.first} ${user.last}`;
}
const userObj = { first: "Nader", last: "Hantash" };
console.log(fullName(userObj)); // "Nader Hantash"

// 34. update age
const personObj = { name: "Lina", age: 25 };
console.log("before:", personObj.age); // 25
personObj.age = 26;
console.log("after:", personObj.age); // 26

// 35. toggle theme
const settings = { theme: "light", lang: "en" };
if (settings.theme === "light") settings.theme = "dark";
else settings.theme = "light";
console.log(settings.theme); // "dark"

/* C6-C10: Arrays */

// 36. add/remove elements
let nums = [5, 2, 9, 1];
nums.push(10);      // add to end
nums.shift();        // remove first element
console.log(nums, nums.length); // [2, 9, 1, 10] 4

// 37. sort alphabetically
let letters = ["b", "a", "c"];
letters.sort();
console.log(letters); // ["a", "b", "c"]

// 38. sort numbers correctly
let scores = [40, 100, 1, 5, 25, 10];
scores.sort((a, b) => a - b);
console.log(scores); // [1, 5, 10, 25, 40, 100]

// 39. splice insert
let colors = ["red", "green"];
colors.splice(1, 0, "blue");
console.log(colors); // ["red", "blue", "green"]

// 40. splice remove
let cities = ["Cairo", "Dubai", "Amman", "Doha", "Riyadh"];
cities.splice(1, 2);
console.log(cities); // ["Cairo", "Doha", "Riyadh"]

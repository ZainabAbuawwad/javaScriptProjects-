/* ============================================================
   JavaScript JSON Practical Tasks — 35 Solutions
   A) JSON.parse() — turning JSON text into objects (1-10)
============================================================ */

// 1. Parse text and print name
let data = '{"name":"John","age":30}';
let obj1 = JSON.parse(data);
console.log(obj1.name); // "John"

// 2. Array of students -> print each name
let studentsJSON = '[{"name":"Ali"}, {"name":"Lina"}]';
let students = JSON.parse(studentsJSON);
students.forEach(s => console.log(s.name)); // "Ali", "Lina"

// 3. Nested object -> extract math score
let info = '{"user":{"name":"Sara","scores":{"math":90}}}';
let infoObj = JSON.parse(info);
console.log(infoObj.user.scores.math); // 90

// 4. Invalid JSON example + fix
let badJSON = "{name:'Adam', age:22}"; // invalid: keys/values need double quotes
let fixedJSON = '{"name":"Adam","age":22}'; // fixed
try {
  JSON.parse(badJSON);
} catch (err) {
  console.log("Parse error:", err.message);
}
console.log(JSON.parse(fixedJSON)); // works

// 5. Parse and change age
let str5 = '{"name":"Adam","age":22}';
let obj5 = JSON.parse(str5);
obj5.age = 23;
console.log(obj5);

// 6. Boolean and null values, log types
let str6 = '{"active":true,"data":null}';
let obj6 = JSON.parse(str6);
console.log(typeof obj6.active, obj6.active); // "boolean" true
console.log(typeof obj6.data, obj6.data);     // "object" null

// 7. Sum of grades
let str7 = '{"grades":[50, 60, 70]}';
let obj7 = JSON.parse(str7);
let total = obj7.grades.reduce((sum, g) => sum + g, 0);
console.log(total); // 180

// 8. Products array, print only those priced above 50
let productsJSON = '[{"name":"Pen","price":10},{"name":"Laptop","price":800},{"name":"Bag","price":60}]';
let products = JSON.parse(productsJSON);
products.filter(p => p.price > 50).forEach(p => console.log(p.name));

// 9. Parse a date field into a Date object
let str9 = '{"created":"2024-01-10"}';
let obj9 = JSON.parse(str9);
let createdDate = new Date(obj9.created);
console.log(createdDate);

// 10. Parse task list and display in a <ul> (browser example)
let tasksJSON = '["Buy milk", "Clean house", "Write code"]';
let tasks = JSON.parse(tasksJSON);
function renderTaskList(taskArray, containerId) {
  const ul = document.createElement("ul");
  taskArray.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    ul.appendChild(li);
  });
  document.getElementById(containerId).appendChild(ul);
}
// renderTaskList(tasks, "myContainer"); // call in a browser with a #myContainer element

/* ============================================================
   B) JSON.stringify() — turning objects into JSON text (11-20)
============================================================ */

// 11. Convert object to JSON
let user = { name: "Mona", age: 28 };
console.log(JSON.stringify(user)); // '{"name":"Mona","age":28}'

// 12. Object with skills array -> JSON
let userSkills = { name: "Mona", skills: ["JS", "HTML", "CSS"] };
console.log(JSON.stringify(userSkills));

// 13. Convert object to JSON and save in localStorage
let settings = { theme: "dark", lang: "en" };
// localStorage.setItem("settings", JSON.stringify(settings)); // run in a browser
console.log(JSON.stringify(settings));

// 14. Use a replacer to ignore "password"
let account = { username: "admin", password: "1234" };
let safeJSON = JSON.stringify(account, (key, value) => key === "password" ? undefined : value);
console.log(safeJSON); // '{"username":"admin"}'

// 15. Object with dates -> JSON, observe how dates are represented
let eventObj = { title: "Meeting", date: new Date() };
console.log(JSON.stringify(eventObj));
// Dates are converted to ISO 8601 strings, e.g. "2026-08-16T10:00:00.000Z"

// 16. Object with a function -> stringify
let obj16 = { name: "Test", action: function () { return 5; } };
console.log(JSON.stringify(obj16));
// Result: '{"name":"Test"}' — functions are NOT valid JSON values, so JSON.stringify silently drops them

// 17. Pretty-print with spacing
let obj17 = { name: "Ali", age: 25 };
console.log(JSON.stringify(obj17, null, 2));
/* Result:
{
  "name": "Ali",
  "age": 25
}
*/

// 18. Convert an invoice object, print text length
let invoice = { id: 101, item: "Laptop", total: 850 };
let invoiceText = JSON.stringify(invoice);
console.log(invoiceText, invoiceText.length);

// 19. User object containing a task array, then stringify the whole thing
let userWithTasks = {
  name: "Sara",
  tasks: ["Design", "Development", "Testing"]
};
console.log(JSON.stringify(userWithTasks));

// 20. stringify a large object, parse it back, display result in DOM
let bigObj = { id: 1, name: "Product", tags: ["new", "sale"], price: 99.99 };
let bigJSON = JSON.stringify(bigObj);
let parsedBack = JSON.parse(bigJSON);
// document.getElementById("output").textContent = JSON.stringify(parsedBack, null, 2);
console.log(parsedBack);

/* ============================================================
   C) JSON + APIs (21-35)
============================================================ */

// 21. fetch users and print their names
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => users.forEach(u => console.log(u.name)))
  .catch(err => console.error("Fetch error:", err));

// 22. fetch a single post, display title in <h2>
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(post => {
    console.log(post.title);
    // document.querySelector("h2").textContent = post.title;
  });

// 23. fetch todo list, show only completed === true
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(todos => {
    const completed = todos.filter(t => t.completed === true);
    console.log(completed);
  });

// 24. fetch images from an API, display first in <img>
fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => res.json())
  .then(photos => {
    console.log(photos[0].url);
    // document.getElementById("myImage").src = photos[0].url;
  });

// 25. send JSON to a mock API using POST
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "New Post", body: "Post content", userId: 1 })
})
  .then(res => res.json())
  .then(result => console.log("Created:", result));

// 26. fetch user data, build a dynamic card in DOM
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(u => {
    const card = document.createElement("div");
    card.innerHTML = `<h3>${u.name}</h3><p>${u.email}</p>`;
    document.body.appendChild(card);
  });

// 27. fetch comments, show only first 5
fetch("https://jsonplaceholder.typicode.com/comments")
  .then(res => res.json())
  .then(comments => console.log(comments.slice(0, 5)));

// 28. button click -> put new JSON data inside a <pre>
document.getElementById("loadBtn")?.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(post => {
      document.getElementById("output").textContent = JSON.stringify(post, null, 2);
    });
});

// 29. fetch JSON, pretty-print with JSON.stringify(obj, null, 2)
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(u => console.log(JSON.stringify(u, null, 2)));

// 30. fetch products array, build inside a <table>
function renderProductsTable(products, tableId) {
  const table = document.getElementById(tableId);
  products.forEach(p => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${p.name}</td><td>${p.price}</td>`;
    table.appendChild(row);
  });
}

// 31. handle invalid JSON coming from an API with try/catch
async function fetchSafely(url) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    const data = JSON.parse(text); // may throw if response isn't valid JSON
    console.log(data);
  } catch (err) {
    console.error("Invalid JSON or network error:", err.message);
  }
}

// 32. fetch JSON, search for a specific value, display results in DOM
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    const searchTerm = "Leanne";
    const results = users.filter(u => u.name.includes(searchTerm));
    console.log(results);
  });

// BONUS: store a full form's data as JSON in localStorage
function saveFormAsJSON(formId) {
  const form = document.getElementById(formId);
  const formData = new FormData(form);
  const obj = Object.fromEntries(formData.entries());
  // localStorage.setItem("formData", JSON.stringify(obj)); // run in a browser
  console.log(JSON.stringify(obj));
}

// 33. small Dashboard based on JSON settings (theme, language)
function applySettings(settingsJSON) {
  const settings = JSON.parse(settingsJSON);
  document.body.className = settings.theme; // e.g. "dark" or "light"
  document.documentElement.lang = settings.language;
}
// applySettings('{"theme":"dark","language":"en"}');

// 34. fetch JSON, merge into a new object using the spread operator
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(u => {
    const merged = { ...u, active: true, lastLogin: new Date().toISOString() };
    console.log(merged);
  });

// 35. convert JSON from an API into a chart (DOM-based, no libraries)
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    const chart = document.createElement("div");
    chart.style.display = "flex";
    chart.style.alignItems = "flex-end";
    chart.style.gap = "4px";
    users.forEach(u => {
      const bar = document.createElement("div");
      bar.style.width = "20px";
      bar.style.height = (u.id * 15) + "px"; // arbitrary metric for demo
      bar.style.background = "steelblue";
      bar.title = u.name;
      chart.appendChild(bar);
    });
    document.body.appendChild(chart);
  });

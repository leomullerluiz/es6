# Complete Guide to ES6 (ECMAScript 2015)

This repository is dedicated to teaching the main concepts of ES6 (ECMAScript 2015), a revolutionary update to JavaScript. Here, you'll find detailed explanations and practical examples of every core feature.

## Summary

- [What is ES6?](#what-is-es6)
- [Variable Declaration: `let` and `const`](#variable-declaration-let-and-const)
- [Arrow Functions](#arrow-functions)
- [Template Literals](#template-literals)
- [Destructuring](#destructuring)
- [Spread and Rest Operators](#spread-and-rest-operators)
- [Classes and Object Orientation](#classes-and-object-orientation)
- [Modules](#modules)
- [Promises](#promises)
- [Other Novelties](#other-novelties)

---

## What is ES6?

ECMAScript 6, known as ES6 or ECMAScript 2015, is one of the biggest updates to JavaScript, published in 2015. It introduced modern syntax, improved code readability, and brought features that make development more robust, safe, and efficient. With ES6, JavaScript became far more usable in complex projects, on both the front-end and the back-end.

Main goals of ES6:
- Modernize the language to keep pace with other popular languages.
- Make it easier to build large, well-structured applications.
- Make code more expressive and easier to maintain.

---

## Variable Declaration: `let` and `const`

Before ES6, `var` was the only option, and it had function scope and allowed reassignment, which could cause bugs through hoisting and scope leakage. ES6 introduced:

### `let`

- Has block scope (inside `{}`), preventing accidental leaks.
- Allows reassignment.

```js
let counter = 0;
if (true) {
  let counter = 1; // This 'counter' only exists inside the block
  console.log(counter); // 1
}
console.log(counter); // 0
```

### `const`

- Also has block scope.
- Does **not** allow reassignment, making the value immutable after assignment.
- An object or array declared with `const` can have its properties changed, but it cannot be reassigned.

```js
const PI = 3.14;
const person = { name: "Leo" };
person.name = "Muller"; // Valid!
person = {}; // Error!
```

**Summary:**
Use `let` for variables that change and `const` for values that never change. Avoid `var` in modern code.

---

## Arrow Functions

Arrow functions (`=>`) simplify writing anonymous functions and callbacks, bringing a leaner syntax and improving how `this` behaves.

### Syntax

```js
// Traditional function
function doubleIt(x) {
  return x * 2;
}

// Equivalent arrow function
const doubleIt = x => x * 2;
```

### Characteristics

- **Short syntax:** Ideal for small functions or callbacks.
- **Has no `this` of its own:** The context is inherited from the enclosing scope, which avoids bugs in object methods and event handlers.
- **Has no `arguments`, `super`, or `new.target`.**
- Cannot be used as a constructor (`new MyArrow()` throws an error).

```js
const person = {
  name: "Leo",
  showName: function() {
    setTimeout(() => {
      // The arrow function inherits `this` from the person object
      console.log(this.name);
    }, 1000);
  }
};
person.showName(); // Leo
```

---

## Template Literals

Lets you create dynamic, multi-line strings, making interpolation and formatting easier.

### Variable Interpolation

```js
const user = "Leo";
const greeting = `Hello, ${user}! Welcome to ES6.`;
```

### Multi-line Strings

```js
const text = `
  This is a string
  that spans multiple lines
  without needing to concatenate.
`;
```

### Expressions

You can run expressions inside the interpolation:

```js
const a = 5, b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // The sum of 5 and 10 is 15
```

**Advantage:** Cleaner, more readable code, avoiding manual concatenation.

---

## Destructuring

Destructuring lets you "unpack" arrays and objects to extract values into separate variables, making code more expressive and direct.

### Arrays

```js
const colors = ["blue", "red", "green"];
const [primary, secondary, tertiary] = colors;
console.log(primary); // blue
```

### Objects

```js
const user = { name: "Leo", age: 25 };
const { name, age } = user;
console.log(name); // Leo
```

### Renaming Variables

```js
const person = { name: "Ana", age: 30 };
const { name: personName, age: personAge } = person;
```

### Function Parameters

```js
function showInfo({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}
```

**Advantage:** Fewer lines of code and greater clarity when handling data.

---

## Spread (`...`) and Rest (`...`) Operators

Both use the same syntax, but they serve different purposes.

### Spread (`...`)

Expands elements of an array or properties of an object.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

### Rest (`...`)

Groups multiple elements into an array. Used in function parameters or destructuring.

```js
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3)); // 6

const [first, ...rest] = [10, 20, 30, 40];
console.log(rest); // [20, 30, 40]
```

---

## Classes and Object Orientation

ES6 brought class syntax, making the object-oriented paradigm more approachable and similar to other languages.

### Class Definition

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}
```

### Inheritance

```js
class Employee extends Person {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }
  introduce() {
    super.introduce();
    console.log(`I work as a ${this.role}.`);
  }
}
```

### Static Methods

```js
class Mathematics {
  static doubleIt(x) {
    return x * 2;
  }
}
console.log(Mathematics.doubleIt(5)); // 10
```

**Advantage:** Clearer syntax, support for inheritance, static methods, and constructors.

---

## Modules

Allow you to split JavaScript code into independent, reusable files, making organization and maintenance easier.

### Exporting

```js
// file: calculation.js
export function sum(a, b) {
  return a + b;
}

export const PI = 3.14;
```

### Importing

```js
// file: app.js
import { sum, PI } from './calculation.js';
console.log(sum(2, 3));
```

### Export Default

Lets you export a single main entity per file.

```js
// file: greeting.js
export default function() {
  console.log("Hello!");
}

// Importing it
import greeting from './greeting.js';
greeting(); // Hello!
```

**Advantage:** Improves modularization and code reuse.

---

## Promises

Promises make it easier to work with asynchronous operations (e.g. HTTP requests, timers), making code more readable and avoiding "callback hell".

### Creating and Using Promises

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Operation completed!");
    } else {
      reject("Operation failed.");
    }
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Chaining Promises

```js
promise
  .then(result => result + " Next step.")
  .then(msg => console.log(msg))
  .catch(error => console.error(error));
```

### Async/Await (ES8)

ES6 brought Promises, but ES8 improved on them with `async/await`, making asynchronous code simpler:

```js
async function run() {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

**Advantage:** A more intuitive flow for handling asynchronous code.

---

## Other Novelties

### Default Parameters

Lets you define default values for function parameters.

```js
function greet(name = "Visitor") {
  console.log(`Hello, ${name}!`);
}
```

### For...of

Iterates over elements of arrays or other iterable objects.

```js
const list = ["a", "b", "c"];
for (const item of list) {
  console.log(item);
}
```

### Map and Set

New data structures for collections.

```js
const map = new Map();
map.set("key", "value");
console.log(map.get("key")); // value

const set = new Set([1, 2, 2, 3]);
console.log(set); // Set(3) {1, 2, 3}
```

### Useful Array Methods

- `find`: returns the first element that satisfies a condition.
- `findIndex`: returns the index of the first element that satisfies a condition.

```js
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(n => n > 10); // 12
const index = numbers.findIndex(n => n > 10); // 1
```

---

## References

- [MDN Documentation - ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ES6 Features Guide](https://es6-features.org/#Constants)
- [ES6 for Beginners](https://www.javascript.com/learn/es6)

---

**Contribute!**
Feel free to suggest examples, raise questions, or improve this guide through pull requests.

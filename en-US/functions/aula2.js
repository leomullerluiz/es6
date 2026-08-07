/*
===========================================
    Lesson 2: this in Regular Functions
===========================================

To get a sense of how this behaves differently in arrow functions, let's do a quick review of how this works in a standard function.

The value of the this keyword is entirely based on how the function or method it refers to is called. this can have its value set in the following ways:

*/

// 1. A new object
// If the function was called using new:
const mySundae = new Sundae('Chocolate', ['Sprinkles', 'Hot Fudge']);
// In the code above, the value of this inside Sundae's scope is a new object, because it was called with new.

// 2. A specific object
// If the function was invoked with call/apply:
const result = obj1.printName.call(obj2);
// In the code above, the value of this inside printName()'s scope will refer to obj2, since the first parameter of the call() method is explicitly set as the object this should refer to.

// 3. A context object
// If the function is a method of an object:
data.teleport();
// In the code above, the value of this inside the teleport() method's scope refers to data.

// 4. The global object or undefined
// If the function is invoked outside of a specific context (it's not a method):
teleport();
// In the code above, the value of this inside teleport()'s scope is the global object or, if strict mode is enabled, it's undefined

// TIP: this is a tricky topic in JavaScript. We did a quick review, but, for a detailed look at how this is determined, check out this All Makes Sense Now!( https://github.com/getify/You-Dont-Know-JS/tree/master ), from the book series by author Kyle Simpson, You Don't Know JS (content in English)

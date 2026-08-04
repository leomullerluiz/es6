/*

===========================================
            Lesson 1: arrow functions
===========================================
ES6 introduces a new kind of function called arrow. Arrow functions are very similar to regular functions in terms of behavior, but they're quite different in terms of syntax. The code below processes a list of names, converting each of them to uppercase, using pre-ES6 function syntax.
*/
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function (name) {
    return name.toUpperCase();
});
console.log(upperizedNames)
//Output: (3) ['FARRIN', 'KAGURE', 'ASSER']

// The code below does exactly the same thing, except the function passed as a parameter to the map() method is an arrow function. Notice the arrow formed in the arrow function ( => ), in the code below:

const upperizedNames2 = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
);
console.log(upperizedNames2)
//Output: (3) ['FARRIN', 'KAGURE', 'ASSER']

// The only change in the code above is the code inside the map() method. That code took a pre-ES6 function and turned it into an arrow.

// NOTE: not sure how the map() method works? It's a method on the array prototype. You pass it a function as a parameter, and it will call that function once for each element in the array. Once that's done, the method takes the values returned from each function call and builds a new array using those results, which becomes the return value of the map() method. For more information, check out the MDN documentation( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map ).


// Converting a function into an arrow
const upperizedNames3 = ['Farrin', 'Kagure', 'Asser'].map(function (name) {
    return name.toUpperCase();
});

//   To convert the function above into an arrow, we need to follow a few steps:

// remove the function keyword
// remove the parentheses
// remove the curly braces
// remove the return keyword
// remove the semicolon
// add an arrow ( => ) between the parameter list and the function body

const upperizedNames4 = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
);


// Regular functions can be either function declarations or function expressions, however, arrow functions are always expressions. In fact, the full name of the arrow function is "arrow function expression", and it can only be used wherever an expression is valid. That includes:

// being stored in a variable,
// being passed as an argument to a function,
// and being stored in an object's property.
// One confusing bit of syntax is when an arrow is stored in a variable

const greet = name => `Hello ${name}!`;

// In the code above, the arrow function is stored in the greet variable, and you can call it like this:

greet('Asser');
//Output: Hello Asser!



// Parentheses and arrow function parameters

// You might have noticed that the arrow function stored in the greet variable has the following shape:
name => `Hello ${name}!`
// The parameter list appears before the arrow ( => ). If that list has only one parameter, you can write it like in the example above, omitting the parentheses. However, if there are two or more items in the parameter list, or even none at all, you'll need to wrap the list in parentheses.
// empty parameter list requires parentheses
const sayHi = () => console.log('Hello Udacity Student!');
sayHi();
//Output: Hello Udacity Student!

// multiple parameters in the list, parentheses required!
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');
//Output: Here's your chocolate ice cream in a waffle cone.


//Concise body syntax and block body syntax
//All the arrow functions we've looked at so far had only a single expression in the function body:
const upperizedNames5 = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
);

// This function body shape is called the "concise body syntax". The concise syntax:

// has no curly braces surrounding the function body
// and automatically returns an expression
// If you need more than one line of code, you can use the "block body syntax" for the function body.
const upperizedNames6 = ['Farrin', 'Kagure', 'Asser'].map(name => {
    name = name.toUpperCase();
    return `${name} has ${name.length} characters in their name`;
});
//Output: (3) ['FARRIN has 6 characters in their name', 'KAGURE has 6 characters in their name', 'ASSER has 5 characters in their name']

//   Important details to keep in mind when using block body syntax:

//   requires curly braces ({}) to wrap the function body
//   and requires a return expression to return a value from the function.

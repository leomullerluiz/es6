/*
===========================================
    Lesson 4: default parameters
===========================================
Take a look at this code:
*/
function greet(name, greeting) {
    name = (typeof name !== 'undefined') ? name : 'Student';
    greeting = (typeof greeting !== 'undefined') ? greeting : 'Welcome';

    return `${greeting} ${name}!`;
}

greet(); // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!
//Output:
// Welcome Student!
// Welcome James!
// Howdy Richard!

// What is that odd mess in the first two lines of the greet() function? Those two lines set default values in case the arguments aren't passed to the function, but it's pretty ugly...

// Fortunately, ES6 introduced a new way to create default arguments, called default function parameters


// Default function parameters
// Default function parameters are very easy to read, since they live in the function's parameter list:

function greet(name = 'Student', greeting = 'Welcome') {
    return `${greeting} ${name}!`;
}

greet(); // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!

// To create a default parameter, we add an equal sign and the value we want the parameter's value to be, in case the function doesn't receive another value at that parameter position when it's called. In the code above, both parameters have string default values, but they can accept any JavaScript type.

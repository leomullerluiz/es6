/*
===========================================
            Lesson 7: The ...rest parameter
===========================================
If you can use the spread operator to break several elements apart, then there must certainly be a way to group several elements back into an array, right?

There sure is! It's called the rest parameter, and it's another new feature in ES6.
*/

// The rest parameter, also written with three consecutive dots ( ... ), lets you represent an indefinite number of elements as an array. This can be useful in several situations.

// One situation is assigning values from an array to variables. For example,

const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

//Output: 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]

// This code pulls the values from the order array and assigns them to individual variables using destructuring. total, subtotal, and tax receive the first three values from the array, while items is where you need to pay closer attention.

// Using the rest parameter, items receives the rest of the array's values (in the form of an array).

// Variadic functions

// Another use case for the rest parameter is when working with variadic functions. Variadic functions are functions that can accept an indefinite number of arguments.

// For example, let's say we have a function called sum(), which calculates the sum of an indefinite number of numbers. How could the sum() function be called at runtime?


sum(1, 2);
sum(10, 36, 7, 84, 90, 110);
sum(-23, 3000, 575000);

// There are, literally, an indefinite number of possible ways to call the sum() function. Regardless of how many parameters are passed to the function, it should always return the total sum of those parameters.


// Using the arguments object
// In previous versions of JavaScript, this kind of function would be created using the arguments(opens in a new tab) object. The arguments object is an array-like object that's available as a local variable inside any function. This object holds a value for each argument being passed to the function, starting at 0 for the first argument, 1 for the second, and so on.
// If we look at the implementation of the sum() function, we'll see how the arguments object could be used to handle the variable number of parameters being passed to it.

function sum() {
    let total = 0;
    for (const argument of arguments) {
        total += argument;
    }
    return total;
}

// 1. Looking at the implementation of the sum() function, we see that it has no parameters at all.
//   -This could lead us into error, since we know the sum() function can receive an indefinite number of parameters.

// 2. It can be hard to understand.
//   -If you've never used the arguments object before, you might be wondering where it came from. Did it appear out of nowhere? It's genuinely hard to tell.

// Using the rest parameter
// Fortunately, with the addition of the rest parameter, you can rewrite the sum() function and make it more readable.

function sum(...nums) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}

//This version of the sum() function isn't just leaner, it's also easier to read. Also, notice that the for...in loop was replaced with the for...of loop

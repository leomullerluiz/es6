/*

===========================================
            Lesson 1: let and const
===========================================


Now there are two new ways to declare variables in JavaScript: let and const.
Before this update, the only way to declare a variable in JavaScript was using the reserved word var. To understand the reason behind adding the reserved words let and const, let's look at an example using var that could cause us problems.
Take a look at the following code.
*/
function getClothing(isCold) {
    if (isCold) {
        var freezing = 'Grab a jacket!';
    } else {
        var hot = 'It’s a shorts kind of day.';
        console.log(freezing);
    }
} //Output: Undefined

/*
Hoisting:
Hoisting is the result of how JavaScript code is interpreted by your browser. Normally, before any JavaScript code is executed, all variables declared with var get "hoisted", which means they are actually declared at the top of the function scope. So, at runtime, the getClothing() function actually behaves more or less like this…
*/

function getClothing(isCold) {
    var freezing;
    var hot;
    if (isCold) {
        freezing = 'Grab a jacket!';
    } else {
        hot = 'It’s a shorts kind of day.';
        console.log(freezing);
    }
}

/*
Before the function runs, every variable is "hoisted" to the top of the function scope. So, what's the solution for this?
*/

/*
Let and const:
Variables declared with let and const eliminate this specific hoisting problem, because their scope is the block where they were declared, not the function scope. Before, when we used var, variables had either global scope or the local scope of an entire function.

If a variable is declared using let or const inside a block of code (delimited by curly braces { }), then the variable gets stuck in what we call the temporal dead zone until the variable declaration is processed. This behavior guarantees that variables can only be accessed after they've been declared.
*/

function getClothing(isCold) {
    if (isCold) {
        let freezing = 'Grab a jacket!';
    } else {
        const hot = 'It’s a shorts kind of day.';
        console.log(freezing);
    }
}//Output: ReferenceError: freezing is not defined

/*

Since freezing isn't declared inside the else block, the function scope, or the global scope, a ReferenceError is thrown.

Variables declared with `let` and `const` are only available inside the block in which they're declared.

*/

/*

Rules for using let and const:

let and const also have other interesting properties:
 - Variables declared with let can have their value reassigned, but they cannot be redeclared in the same scope.
 - Variables declared with const must have an initial value assigned, but they cannot be redeclared in the same scope and cannot have their value reassigned.

 */

/*
Use cases
The big question is: when should you use let, and when should you use const? The general rule is as follows:

use let when you intend to reassign new values to a variable.
use const when you don't intend to reassign new values to a variable.
Since const is the most restrictive way of declaring a variable, we suggest you always declare variables with const, because that makes your code more readable, since you know those values won't change over the course of your program's execution. If you find that you'll need to update or modify a variable, go back and switch from const to let.

Pretty easy, right? But what about var?

What about var?
Is there still any reason to use var? Not really.

There are a few arguments in favor of using the reserved word var in situations where you want to declare a variable globally, but this is considered bad practice and should be avoided. From now on, we suggest you drop var and use let or const.

*/

/*
===========================================
            Lesson 5: Iteration | iterable
===========================================
The for...of loop is the newest addition to the family of for loops in JavaScript.

This loop combines the strengths of its siblings, the for loop and the for...in loop, to iterate over data that is considered iterable (following the iterable protocol( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols ), which we'll study in lesson 3). By default, this includes the string, array, map, and set data types — it's easy to notice the absence of the Object data type ({}, for example) from this list. Objects aren't iterable by default.

Before we study the for...of loop, let's take a look at the other for loops to understand their weaknesses.

For Loop:
The for loop is obviously the most common loop out there, so, here's a quick review.
*/

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
    console.log(digits[i]);
}
/*
Output:
0
1
2
3
4
5
6
7
8
9

*/

/*
The biggest downsides of the for loop are having to keep track of the counter and the loop's exit condition.

In this example, we're using the variable i as a counter to keep track of the loop and to access the array's variables. We're also using the array's digits.length property to determine the loop's exit condition. If you glance at this code quickly, it can be hard to identify what's going on, especially for beginners.

While for loops certainly have advantages when iterating over arrays, some data structures are different from arrays, which means a for loop stops being an option in those cases.
*/


/*
for...in loop:
The for...in loop reduces the weaknesses of the for loop by eliminating the counting logic and the exit condition.
*/
const digits2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits2) {
    console.log(digits2[index]);
}
/*
Output:
0
1
2
3
4
5
6
7
8
9
*/

/*
But you still have to deal with an index to access the array's values, and that's a bad sign; it makes the code almost more confusing than before.

Also, the for...in loop can get you into trouble when you need to add extra methods to an array (or another object), because for...in loops iterate over every enumerable property, which means properties added to the array's prototype will also show up in the loop.
*/
Array.prototype.decimalfy = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toFixed(2);
    }
};

const digits3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits3) {
    console.log(digits3[index]);
}

/*
0
1
2
3
4
5
6
7
8
9
function() {
 for (let i = 0; i < this.length; i++) {
  this[i] = this[i].toFixed(2);
 }
}
*/

/*
Horrible! This is why for...in loops aren't recommended for iterating over arrays.
NOTE: the forEach loop is another kind of for loop in JavaScript, however, forEach() is an array method, so it can only be used with arrays. There's also no way to stop or break out of a forEach loop. If you need that kind of behavior, you'll have to use a basic for loop.
*/

/*
The for...of loop:
The for...of loop is used to iterate over any data type that is an iterable.

You write a for...of loop exactly the way you'd write a for...in loop, except you swap in for of, and you don't need an index.
*/

const digits4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits4) {
  console.log(digit);
}

/*
Output:
0
1
2
3
4
5
6
7
8
9
*/

/*
That makes the for...of loop the leanest of all the for loops.
TIP: it's good practice to use plural names for objects that are collections of values. That way, when you iterate over the collection, you can use the singular form of the collection's name to represent a single item inside it. For example, for (const button of buttons) {...}.
*/

const digits5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits5) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}
/*
Output:
1
3
5
7
9

*/

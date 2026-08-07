/*

===========================================
            Lesson 2: Template literals
===========================================

Before ES6, the old way of concatenating strings was using the concatenation operator ( + ).

*/

const student = {
    name: 'Richard Kalehoff',
    guardian: 'Mr. Kalehoff'
  };

  const teacher = {
    name: 'Mrs. Wilson',
    room: 'N231'
  }

  let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';

// Output: Richard Kalehoff please see Mrs. Wilson in N231 to pick up your report card.

/* This works, but it gets more complicated when you need to build multi-line strings. */
let note = teacher.name + ',\n\n' +
  'Please excuse ' + student.name + '.\n' +
  'He is recovering from the flu.\n\n' +
  'Thank you,\n' +
  student.guardian;
/* Output:
Mrs. Wilson,

Please excuse Richard Kalehoff.
He is recovering from the flu.

Thank you,
Mr. Kalehoff
*/

/*

However, that changed with the introduction of template literals (previously known, in ES6's development versions, as "template strings").

NOTE: as an alternative to using the string concatenation operator, ( + ), you can use the string object's concat() method, but both options are pretty weak substitutes for true string interpolation
https://en.wikipedia.org/wiki/String_interpolation

*/

/*

Template literals
Template literals are essentially string literals that include embedded expressions.

Delimited with backticks ( ` `) instead of single quotes ( '' ) or double quotes ( "" ), template literals can contain placeholders represented by the ${expression} syntax. This makes building strings much easier.

Let's look at the previous examples, now using template literals.

*/
let message2 = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
//Output: Richard Kalehoff please see Mrs. Wilson in N231 to pick up your report card.

/*
Using template literals, you can drop the quotes and the string concatenation operator. Plus, you can reference an object's properties directly inside the expressions.

TIP: embedded expressions inside template literals can do more than just reference variables. You can perform operations, call functions, and even use loops inside the embedded expressions!
*/

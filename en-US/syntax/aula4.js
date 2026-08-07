/*
===========================================
            Lesson 4: Object literal shorthand
===========================================

A recurring theme in ES6 is eliminating unnecessary code repetition. By removing as much repetition as possible, your code becomes easier to read and leaner. This theme continues with the introduction of a new shorthand for initializing objects and adding methods to them.

Let's see how this works.

Object literal shorthand:

You've probably already written code where an object is initialized using property names identical to the names of the variables assigned to them.

In case you've never written it that way, here's an example:
*/
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat
};

console.log(gemstone);
//Output: Object {type: "quartz", color: "rose", carat: 21.29}

/*
Do you notice how repetitive the terms are? Don't type: type, color: color, and carat: carat look redundant?

The good news is that you can drop those duplicate variable names from the object's properties, as long as the properties have the same name as the variables assigned to them.

Take a look!
*/

const gemstone2 = { type, color, carat };

//If the properties have the same name as the variables assigned to them, then you can simply write the variable name once.

/*
Speaking of shorthand, ES6 also has a shorthand for adding methods to objects.

To see how this works, let's start by adding a calculateWorth() method to our gemstone object. The calculateWorth() method will tell us how much our gemstone is worth, based on its type, color, and carat properties.
*/

let type3 = 'quartz';
let color3 = 'rose';
let carat3 = 21.29;

const gemstone3 = {
  type3,
  color3,
  carat3,
  calculateWorth: function() {
    // will calculate how much our gemstone is worth, based on its `type`, `color`, and `carat` properties

  }
};

/*
In this example, an anonymous function is being assigned to the calculateWorth property, but is the function keyword actually necessary? In ES6, no!
*/

//Method name shorthand
//Since you only need to reference the calculateWorth property to call the function, having the function keyword is redundant, so it can be dropped.

let gemstone4 = {
    type,
    color,
    carat,
    calculateWorth() { /* ... */ }
  };

/*
==========================
    Lesson 1: symbol
==========================
*/

// A symbol is a unique, immutable data structure that's often used to identify object properties.
// To create a symbol, you write Symbol(), passing an optional string as its description.

const sym1 = Symbol('apple');
console.log(sym1);
//Output: Symbol(apple)

// This creates a unique symbol and stores it in the sym1 variable. The "apple" description is just a way to describe the symbol, but it can't be used to access the symbol itself.

const sym2 = Symbol('banana');
const sym3 = Symbol('banana');
console.log(sym2 === sym3);
//Output: false


// This can be a bit tricky to grasp, so let's use an example from the previous video to see how symbols can be useful. Here's the code representing that example's bowl object:

const bowl = {
  'apple': { color: 'red', weight: 136.078 },
  'banana': { color: 'yellow', weight: 183.15 },
  'orange': { color: 'orange', weight: 170.097 }
};

//   The bowl contains fruits that are objects and that, in turn, are properties of the bowl. However, this causes a problem when a second banana is added.

const bowl2 = {
  'apple': { color: 'red', weight: 136.078 },
  'banana': { color: 'yellow', weight: 183.151 },
  'orange': { color: 'orange', weight: 170.097 },
  'banana': { color: 'yellow', weight: 176.845 }
};
console.log(bowl2);
// Output: Object {apple: Object, banana: Object, orange: Object}

// Instead of adding another banana to the bowl, our first banana gets overwritten by the new one. To solve this problem, we can use symbols.

const bowl3 = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl3);
// Output: Object {Symbol(apple): Object, Symbol(banana): Object, Symbol(orange): Object, Symbol(banana): Object}
//By changing the bowl's properties to use symbols, each property is a unique Symbol and the first banana won't be overwritten by the second one.

/*
===========================================
            Lesson 6: Spread operator
===========================================

The spread operator, written with 3 consecutive dots ( ... ), is new in ES6 and lets us break spread iterable objects(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators#iterators) (iterable objects) apart into multiple elements.

Let's look at a few examples to understand how it works.
*/
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
//Output: Don Quixote The Hobbit Alice in Wonderland Tale of Two Cities

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);
//Output: 2 3 5 7 11 13 17 19 23 29

/*
Looking at the output of the examples, we see that both the array and the set were broken apart into their individual elements, but how can this be useful?
NOTE: sets are a new native object in ES6, we'll cover sets in detail later, in lesson 3.
*/

/*
Combining arrays using concat
A good example of the usefulness of the spread operator is combining arrays.

If you ever needed to combine arrays before the spread operator, you were forced to use the array object's concat() method.
*/

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = fruits.concat(vegetables);
console.log(produce);
//Output: apples bananas pears corn potatoes carrots

// That's not so bad, but wouldn't it be nicer if there was a simpler way to write this code?

// For example, something like…

// ⚠️ const warning ahead ⚠️
// If you're following along with this course by copying and pasting the code, you've already declared the produce variable with the const keyword. The following code attempts to redeclare and reassign the variable, so, depending on how you're running the code, an error may occur.

// Remember that variables declared with const cannot be redeclared or reassigned in the same scope.

const produce2 = [fruits, vegetables];
console.log(produce);
//Output:  [Array[3], Array[3]]

// Unfortunately, that doesn't work.

// Instead of combining the arrays, this code adds the fruits array to the first index and the vegetables array to the second index of the produce array.

//Let's try the spread operator?

const fruits3 = ["apples", "bananas", "pears"];
const vegetables3 = ["corn", "potatoes", "carrots"];

const produce3 = [...fruits3, ...vegetables3];

console.log(produce3);
//Output: [ 'apples', 'bananas', 'pears', 'corn', 'potatoes', 'carrots' ]

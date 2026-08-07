/*
==========================
    Lesson 2: Iteration and the iterable protocol

    Iteration is a fundamental programming concept that describes the process of going through a sequence of elements, usually in order, to perform some operation or access each element individually.
==========================

The iterable protocol is used to define and customize the iteration behavior of objects. This means that, in ES6, you now have the flexibility to specify a way to iterate through the values in an object. For some objects, this behavior is native to the language, like in strings and arrays.
*/

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) {
    console.log(digit);
}

// If you remember lesson 1, any object that is an iterable can use the new for...of loop. Throughout this lesson, you'll also learn about Sets and Maps, which are other examples of native iterables in the language.


// How it works
// For an object to be an iterable, it must implement the iterable interface. If you've used a language like Java or C before, you're probably already familiar with interfaces, but, for those who aren't, this means that, for an object to be an iterable, it must have a standard method called iterator. This method will define how the object should be iterated.

// The iterator method, which is available through the [Symbol.iterator] constant, is a function with no arguments that returns an iterator object. An iterator object is an object that conforms to the iterator protocol.

// The iterator protocol is used to define a standard way for an object to produce a sequence of values. This means you now have a process for defining how an object will iterate. This is done by implementing the .next() method.

// An object becomes an iterator when it implements the .next() method. The .next() method is a function that takes zero parameters and returns an object with two properties:

// value : the data representing the next value in the sequence of values contained in the object.
// done : a boolean field that represents whether the iterator has finished going through the sequence of values.
// If done is true, then the iterator has reached the end of its sequence of values.
// If done is false, then the iterator is still able to produce another value in its sequence of values.
// Here's the previous example, but now using the array's default iterator to go through each value in the array.

const digits2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits2[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

//Converting an object into an iterator object

const james = {
    name: 'James',
    height: `5'10"`,
    weight: 185
};


//Solution

const james2 = {
    name: 'James',
    height: `5'10"`,
    weight: 185,
    [Symbol.iterator]() {
        var keys = Object.keys(this);
        var i = 0;
        return {
            next: () => {
                const key = keys[i++];
                const value = this[key];
                const done = i >= keys.length;
                return { key, value, done };
            }
        };
    }
};
let iterator = james[Symbol.iterator]();

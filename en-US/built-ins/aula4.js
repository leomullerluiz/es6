/*
==========================
    Lesson 4: Maps
==========================
If sets and arrays have similarities, then maps and objects are similar too, since maps store key-value pairs in a way similar to how objects hold properties with names and values.

Basically, a map is an object that lets you store key-value pairs where both the keys and the values can be objects, primitive values, or a combination of the two.
*/

//Creating a map
const employees = new Map();
console.log(employees);
//Output: Map {}

//Unlike sets, you can't create maps from a list of values; instead, you add key-value pairs using the .set() method.

const employees2 = new Map();

employees2.set('james.parkes@udacity.com', {
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer'
});
employees2.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees2.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees2);
//Output: Map {'james.parkes@udacity.com' => Object {...}, 'julia@udacity.com' => Object {...}, 'richard@udacity.com' => Object {...}}

//The .set() method takes two parameters. The first parameter is the key, which is used to reference the second argument, the value.

//To remove key-value pairs, simply use the .delete() method.

employees2.delete('julia@udacity.com');

//Again, similarly to sets, you can use the .clear() method to remove every key-value pair contained in the map.

employees2.clear()

//if you use the .set() method to add a key-value pair to a map that already uses the same key, you won't get an error, but the key-value pair will overwrite the pair that already exists in the map. If you try to use the .delete() method to remove a key-value pair that isn't in the map, you won't get an error either, and the map will remain unchanged.

//Both methods return true if a key-value pair is successfully added to or removed from the map, and false otherwise.

//---------------------------------------------------

//Once you've built your map, you can use the .has() method to check whether a key-value pair exists, passing the key as a parameter.

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));
console.log(members.has('Marcus'));
//Output: false, true

// And you can also retrieve values held in a map, using the .get() method and passing the key as a parameter.

console.log(members.get('Evelyn'));
//Output: 75.68

//---------------------------------------------------
//Iterating over a map

// You've created a map, added a few key-value pairs, and now you want to iterate over your map's items. Fortunately, you can choose between three different options:

// 1. Access each key or value using the map's default iterator
// 2. Iterate over each key-value pair using the new for...of loop
// 3. Iterate over each key-value pair using the map's .forEach() method

// 1: Using a MapIterator
// Using either the .keys() method or the .values() method on a map will return a new iterator object, called a MapIterator. You can store that iterator in a new variable and use the .next() method to access every key-value pair in the map in a loop. The method used will determine whether your iterator has access to the map's keys or values.

let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next();
//Output: Object {value: 'Evelyn', done: false}

//Use .next() to retrieve the next key.
iteratorObjForKeys.next();
//Object {value: 'Liam', done: false}

//And so on.

//On the other hand, use .values() to access the values of the key-value pairs, repeating the same process.

let iteratorObjForValues = members.values();
iteratorObjForValues.next();
//Output: Object {value: 75.68, done: false}

// 2. Using a 'for...of' loop
//Your second option for iterating over a map's items is using a for...of loop.

for (const member of members) {
    console.log(member);
}
//Output:
//  ['Evelyn', 75.68]
//  ['Liam', 20.16]
//  ['Sophia', 0]
//  ['Marcus', 10.25]

//However, when you use a for...of loop with a map, you don't get exactly a key-value pair back. Actually, the key-value pair gets split into an array where the first element is the key and the second element is the value. Is there any way to fix this?

const members2 = new Map();

members2.set('Evelyn', 75.68);
members2.set('Liam', 20.16);
members2.set('Sophia', 0);
members2.set('Marcus', 10.25);

for (const [key, value] of members2.entries()) {
    console.log(key, value);
}

// 3. Using a 'forEach' loop
//Your last option for going through a map is with the .forEach() method.
members2.forEach((value, key) => console.log(value, key));
// Output:
// 'Evelyn' 75.68
// 'Liam' 20.16
// 'Sophia' 0
// 'Marcus' 10.25
//Notice how it was possible, with the help of an arrow function, to improve the readability of the forEach loop. For each value and key in the members map, print value and key to the console.

//----------------------------------------------------

//What is a WeakMap?
//A WeakMap is like a regular map, with a few small differences:
// 1. a WeakMap can only contain objects as keys,
// 2. a WeakMap is not an iterable, which means it's not possible to run a loop to go through its contents, and
// 3. a WeakMap doesn't have a .clear() method.
// You can create a WeakMap just like you would create a regular map, except for using the word WeakMap in the constructor.
const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);
//Output:
//WeakMap {Object {title: 'Pride and Prejudice', author: 'Jane Austen'} => true, Object {title: 'The Catcher in the Rye', author: 'J.D. Salinger'} => false, Object {title: 'Gulliver’s Travels', author: 'Jonathan Swift'} => true}
//…but, if you try to add something other than an object as a key, you'll get an error!
library.set('The Grapes of Wrath', false);
//Output: Uncaught TypeError: Invalid value used as weak map key(…)

//This is expected behavior, because a WeakMap can only contain objects as keys. Again, similarly to WeakSets, WeakMaps are also quite useful for making better use of garbage collection cycles.

//----------------------------------------------------

//Garbage collection

// In JavaScript, memory is allocated when new values are created and is automatically freed up when those values are no longer needed. This process of freeing up memory once it's no longer in use is known as garbage collection.

// WeakMaps take advantage of garbage collection by working exclusively with objects in place of keys. If you change an object's value to null, then you're essentially deleting the object. When the JavaScript garbage collector runs, the memory that object previously occupied will be freed up for later use in your program.

book1 = null;
console.log(library);

//Output: WeakMap {Object {title: 'The Catcher in the Rye', author: 'J.D. Salinger'} => false, Object {title: 'Gulliver’s Travels', author: 'Jonathan Swift'} => true}

// What makes this so useful is that you don't need to worry about removing references to deleted objects in your WeakMaps, JavaScript will handle that for you automatically! When an object is deleted, the object's key will also be removed from the WeakMap once garbage collection runs, which makes WeakMaps very useful in situations where you want a lightweight, efficient solution for creating groups of objects with metadata.

// The exact moment when garbage collection occurs depends on many different factors. Take a look at the MDN documentation(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management#garbage_collection) to learn more about the algorithms used to control garbage collection in JavaScript.

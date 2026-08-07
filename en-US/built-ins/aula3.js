/*
==========================
    Lesson 3: Sets
==========================
In mathematics, a set is a collection of items that are distinct from each other. For example, {2, 4, 5, 6} is a set because every number is unique and appears only once. However, {1, 1, 2, 4} isn't a set, because it contains duplicate items (1 is there more than once!).

In JavaScript, we can already get something similar to a mathematical set by using an array.

*/
const nums = [2, 4, 5, 6];

//However, arrays don't force items to be unique. If we try to add another 2 to the nums array, JavaScript won't complain and will add it without any issue.

nums.push(2);
console.log(nums);
//Output: [2, 4, 5, 6, 2]
//…and now nums is no longer a set in the mathematical sense of the word.

//Sets

//In ES6, there's a new built-in object that behaves like a mathematical set and works in a way similar to an array. This new object is called set, by convention. The biggest differences between a set and an array are:

// - Sets don't have indexes - you don't reference items in a set based on their position in the set
// - items in a set can't be accessed individually.

//Basically, a set is an object that lets you store unique items. You can add items to a set, remove items from a set, and iterate over a set. These items can be either primitive values or complex objects.

const games = new Set();
console.log(games);

// Output: Set {}

//This creates a games set, with no items in it.

//If you want to create a set from a list of values, you can pass an array as a parameter to the constructor:

const games2 = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games2);
//Output: Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}

//Notice how, in the example above, the duplicate item "Super Mario Bros." is disregarded when the set is created. Pretty cool!


// Modifying sets
//Once you've created a set, you'll probably want to add or delete items from it. So, how do we do that? Use the appropriate .add() and .delete() methods:


const games3 = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games3.add('Banjo-Tooie');
games3.add('Age of Empires');
games3.delete('Super Mario Bros.');

console.log(games3);
//Output: Set {'Banjo-Kazooie', 'Mario Kart', 'Banjo-Tooie', 'Age of Empires'}

//On the other hand, if you want to delete every item in a set, you can use the .clear() method.

games3.clear()
console.log(games3);
//Output: Set {}

//TIP: if you try to .add() a duplicate item to a set, you won't get an error, but the item won't be added to the set. Also, if you try to .delete() an item that isn't in a set, you won't get an error either, and the set will remain unchanged. Both methods return true if an item is successfully added to or removed from the set, and false if it isn't.

//Checking the size

//Once your set has been built, there are different properties and methods you can use to work with it.

//Use the .size property to return the number of items in a set:

const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
console.log(months.size);
//Output: 12

//Remember, items in sets can't be accessed by an index like in an array, so, you use the .size property, instead of .length, to retrieve the size of the set.


//Checking whether an item exists
//Use the .has() method to check whether an item exists in a set. If the item is in the set, the .has() method will return true. Otherwise, it will return false.

console.log(months.has('September'));
//Output: true


//Retrieving all values
//Finally, use the .values() method to return all the values in a set. The value returned by the .values() method is a SetIterator object.

console.log(months.values());
//Output: SetIterator { 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' }

//TIP: The .keys() method will behave exactly the same way as the .values() method, returning the values of a Set as a new iterator object. The .keys() method is an "alias" for the .values() method, for similarity with maps.

//The last step for working with sets is iterating over their items.
//As we saw in the earlier discussion about the new iterable and iterator protocols in ES6, sets are iterables by default. This means two things in terms of looping:
// 1.You can use the set's default iterator to go through each item in the set, one by one.
// 2. You can use the new for...of loop to go through each item in a set.

//Using the SetIterator

//Since the .values() method returns a new iterator object (called SetIterator), you can store that iterator in a variable and go through each item in the set with a loop, using the .next() method.
const iterator = months.values();
iterator.next();
//Output: Object {value: 'January', done: false}

//What if you run .next() again?

iterator.next();
//Output: Object {value: 'February', done: false}

//And so on, until done equals true, which marks the end of the set.


//Using a for...of loop
//An easier way to iterate through the items in a set is using the for...of loop.

const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
for (const color of colors) {
    console.log(color);
}

//Outut: ]
/*
red
orange
yellow
green
blue
violet
brown
black
*/


const myFavoriteFlavors = new Set()
myFavoriteFlavors.add("chocolate chip")
myFavoriteFlavors.add("cookies and cream")
myFavoriteFlavors.add("strawberry")
myFavoriteFlavors.add("vanilla")
myFavoriteFlavors.delete("strawberry")
console.log(myFavoriteFlavors)


/*==================================
    WeakSet
====================================*/
//A WeakSet is like a regular set, but with a few key differences:
// 1. a WeakSet can only contain objects
// 2. a WeakSet is not an iterable, which means it isn't possible to iterate over its items
// 3. a WeakSet doesn't have a .clear() method

const student1 = { name: 'James', age: 26, gender: 'male' };
const student2 = { name: 'Julia', age: 27, gender: 'female' };
const student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);
// output: WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'Richard', age: 31, gender: 'male'}, Object {name: 'James', age: 26, gender: 'male'}}

//…but, if you try to add something that isn't an object, you'll get an error!
roster.add('Amanda');
//Output: Uncaught TypeError: Invalid value used in weak set(…)

//This is expected behavior, because WeakSets can only contain objects. But, why should WeakSets only contain objects? Why would you use a WeakSet, if a regular set can hold objects and other data types too? Well, the answer to that question is more closely related to why WeakSets don't have a .clear() method...

//Garbage collection
//In JavaScript, memory is allocated when new values are created, and it's automatically freed up when those values are no longer needed. This process of freeing up memory once it's no longer in use is known as garbage collection.
//WeakSets take advantage of garbage collection by working exclusively with objects. If you change an object's value to null, then you're essentially removing the object. When the JavaScript garbage collector runs, the memory that object previously occupied will be freed up for later use in your program.

student3 = null;
console.log(roster);
//Output: WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'James', age: 26, gender: 'male'}}

// What makes this so useful is that you don't need to worry about removing references to deleted objects in your WeakSets, JavaScript will handle that for you automatically! When an object is deleted, it will also be deleted from the WeakSet once garbage collection runs, which makes WeakSets very useful in situations where you want a lightweight, efficient solution for creating groups of objects.

//The exact moment when garbage collection occurs depends on many different factors. Take a look at the MDN documentation(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management#garbage_collection) to learn more about the algorithms used to control garbage collection in JavaScript.

const uniqueFlavors = new WeakSet();
const flavor1 = { flavor: "chocolate" };
const flavor2 = { flavor: "vanilla" };
uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);
console.log(uniqueFlavors);
uniqueFlavors.add(flavor1);
console.log(uniqueFlavors);

/*
==========================
    Lesson 5: Promises
==========================
A promise in JavaScript is created with the new Promise constructor function(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) - new Promise(). A promise lets you kick off some work that will happen asynchronously and frees you up to do other work in the meantime. When you create a promise, you need to hand it the code that will run asynchronously. You hand off this code as a parameter to the constructor function:

*/

new Promise(function () {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
    }, Math.random() * 2000);
});

// This code creates a promise that will start a few seconds after the request is made, and then will run the necessary steps of the createSundae function

// But once everything is done, how does the JavaScript engine let us know that everything is ready and that we're clear to move forward? By passing two functions as parameters to our initial promise parameter function, typically known as resolve and reject.

// The function is passed to the function we supply in the promise's constructor - typically, we use the word "resolve" to indicate that this function should be called when the request completes successfully. Notice the resolve written on the first line:

new Promise(function (resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        resolve(sundae);
    }, Math.random() * 2000);
});

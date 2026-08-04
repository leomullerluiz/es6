/*
===========================================
    Lesson 3: this in Arrow Functions
===========================================
In regular functions, the value of this is set based on how the function is called. In arrow functions, the value of this is based on the context the function is found in. In other words, the value of this inside an arrow function is the same as its value outside the function.

Let's look at another example of this in regular functions, and then let's check how arrow functions behave.
*/
// constructor
function IceCream() {
    this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function () {
    setTimeout(function () {
        this.scoops++;
        console.log('scoop added!');
    }, 500);
};

const dessert = new IceCream();
dessert.addScoop();
// Output: scoop added!
// After running the code above, you might think dessert.scoops would be 1 after half a second. But, unfortunately, it isn't:
console.log(dessert.scoops);
//Output: 0
// Can you tell why?
// The function passed to setTimeOut() is called without the new keyword (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new), without the call() method, without apply(), and without a context object. This means the value of this inside the function is the global object, not the dessert object we created (with a default value of undefined). Then, the new property on the global object gets incremented (undefined + 1 resulting in NaN):
console.log(scoops);
//Output: NaN

//One way to work around this is by using a closure:
// constructor
function IceCream() {
    this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function () {
    const cone = this; // sets `this` to the `cone` variable
    setTimeout(function () {
        cone.scoops++; // references the `cone` variable
        console.log('scoop added!');
    }, 0.5);
};

const dessert2 = new IceCream();
dessert2.addScoop();

// The code above works because, instead of using this inside a function, it assigns this to the cone variable and increments a property of the cone variable when the function is called. Since the function is using the value of this from outside the function, this works. If we check the value of the dessert object's scoops property now, we'll see the expected value of 1:
console.log(dessert2.scoops);
//Output: 1

// This is exactly what arrow functions do, so, let's replace the function passed as a parameter to setTimeout() with an arrow function:
// constructor
function IceCream() {
    this.scoops = 0;
  }

  // adds scoop to ice cream
  IceCream.prototype.addScoop = function() {
    setTimeout(() => { // an arrow function is passed to setTimeout
      this.scoops++;
      console.log('scoop added!');
    }, 0.5);
  };

  const dessert3 = new IceCream();
  dessert3.addScoop();
//Since arrow functions inherit this from the enclosing scope, this code works!
console.log(dessert3.scoops);
// Output: 1

// When addScoop() is called, the value of this inside addScoop() refers to dessert. Since an arrow function is passed as a parameter to setTimeout(), the context it's found in is used to determine the value of this. Since this, outside the arrow function, refers to the dessert object, the value of this inside the arrow will also refer to dessert.

// Now, what do you think would happen if we changed the addScoop() method to an arrow function?
// constructor
function IceCream() {
    this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = () => { // addScoop is now an arrow function
  setTimeout(() => {
    this.scoops++;
    console.log('scoop added!');
  }, 0.5);
};

const dessert4 = new IceCream();
dessert4.addScoop();

// Right, this doesn't work, for the same reason - arrow functions inherit the value of this from the context they're found in. Outside the scope of the addScoop() method, the value of this is the global object; so, if addScoop() is an arrow function, the value of this in its inner context is the global object.

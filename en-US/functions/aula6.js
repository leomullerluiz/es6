/*
===========================================
    Lesson 5: Classes preview
===========================================

Here's a small example of what a class in JavaScript looks like:

*/
class Dessert {
    constructor(calories = 250) {
        this.calories = calories;
    }
}

class IceCream extends Dessert {
    constructor(flavor, calories, toppings = []) {
        super(calories);
        this.flavor = flavor;
        this.toppings = toppings;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
}

//   Notice how the new class keyword appears right before Dessert and IceCream, and how the new extends keyword appears in class IceCream extends Dessert. Also notice how the super() method is called inside IceCream's constructor() method.

//   There are several new keywords and syntax to play with when creating classes in JavaScript, but, before we dive into the specifics of how to write JS classes, we want to point out a pretty confusing part of the language when compared to class-based languages.

// Reviewing ES classes
//Knowing that ES6 classes are just smoke and mirrors that hide the fact that, under the hood, inheritance happens via prototypes, let's take a quick look at how to create classes with ES5 code

function PlaneES5(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
}

// methods "inherited" by all instances
PlaneES5.prototype.startEngines = function () {
    console.log('starting engines...');
    this.enginesActive = true;
};

const richardsPlane = new PlaneES5(1);
richardsPlane.startEngines();

const jamesPlane = new PlaneES5(4);
jamesPlane.startEngines();


//   In the code above, the plane function is a constructor that will create a new plane object. Information about a specific plane object is passed to the plane function and assigned to the object. Methods that are "inherited" by every plane object live on the plane.prototype object. richardsPlane is created with one engine, while jamesPlane is created with four engines. Nevertheless, both objects use the same startEngines method to activate their respective engines.

// Important notes:

// the constructor function is called with the new keyword
// by convention, the constructor function's name starts with a capital letter
// the constructor function controls the data that will be assigned to the object being created
// inherited methods are placed on the constructor function's prototype object.
// Keep this in mind as we study how classes work in ES6, because, under the hood, they do exactly this.

//ES6 Classes
//Here's an example of how that same Plane class would be written with the new class syntax:
class Plane {
    constructor(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
    }

    startEngines() {
        console.log('starting engines…');
        this.enginesActive = true;
    }
}


// A class is just a function
//Just to prove there's nothing special about the class keyword in ES6, take a look at this code

class Plane2 {
    constructor(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
    }

    startEngines() {
        console.log('starting engines…');
        this.enginesActive = true;
    }
}

typeof Plane2; // output: function,


// Static methods

// To create a static method, place the static keyword before the method name. Take a look at the badWeather() method in the code below.

class Plane3 {
    constructor(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
    }

    static badWeather(planes) {
        for (let plane of planes) {
            plane.enginesActive = false;
        }
    }

    startEngines() {
        console.log('starting engines…');
        this.enginesActive = true;
    }
}

// Benefits of classes

//   Less setup
// Using the new syntax, you'll need to write far less code to create a constructor function.

// Clarity in the constructor function's definition
// Inside the class definition, you can explicitly declare the constructor function.

// Everything is more organized
// All the code needed for the class to work is contained inside the class declaration itself, instead of having to declare the constructor function in one place and then adding methods to the prototype object one by one!


// Things to watch out for when using classes

// class is not magic
// The class keyword brings along a lot of concepts used by other languages. This keyword doesn't magically add that functionality to JavaScript

// class is just a thin layer on top of prototype-based inheritance
// We've said this a few times already, but, under the hood, a JavaScript class just uses prototype-based inheritance.

// Using classes requires the use of new
// When creating a new instance of a JavaScript class, the new keyword must be used.


class Toy {
    //...
}

try {
    const myToy1 = Toy(); // throws an error
} catch (e) {
    console.error(e);
}
// Output: Uncaught TypeError: Class constructor Toy cannot be invoked without 'new'


// but, using the new keyword fixes the problem,

const myToy2 = new Toy(); // this works!


//Subclasses in ES6

// Now that we've seen how to create classes in JavaScript, let's use the new super and extends keywords to extend a class.

class Tree {
    constructor(size = '10', leaves = { spring: 'green', summer: 'green', fall: 'orange', winter: null }) {
        this.size = size;
        this.leaves = leaves;
        this.leafColor = null;
    }

    changeSeason(season) {
        this.leafColor = this.leaves[season];
        if (season === 'spring') {
            this.size += 1;
        }
    }
}

class Maple extends Tree {
    constructor(syrupQty = 15, size, leaves) {
        super(size, leaves);
        this.syrupQty = syrupQty;
    }

    changeSeason(season) {
        super.changeSeason(season);
        if (season === 'spring') {
            this.syrupQty += 1;
        }
    }

    gatherSyrup() {
        this.syrupQty -= 3;
    }
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');


// Both Tree and Maple are JavaScript classes. The Maple class is a "subclass" of the Tree class and uses the extends keyword to become a "subclass". To access the parent class from the subclass, we use the super keyword. Notice that super was used in two different ways inside Maple's constructor, super is used as a function. In Maple's changeSeason() method, super is used as an object!


// Comparing with ES5 subclasses
// Let's look at the same functionality, now written in ES5 code:

function TreeES5(size, leaves) {
    this.size = (typeof size === "undefined")? 10 : size;
    const defaultLeaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null};
    this.leaves = (typeof leaves === "undefined")?  defaultLeaves : leaves;
    this.leafColor;
  }

  TreeES5.prototype.changeSeason = function(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }

  function MapleES5 (syrupQty, size, leaves) {
    TreeES5.call(this, size, leaves);
    this.syrupQty = (typeof syrupQty === "undefined")? 15 : syrupQty;
  }

  MapleES5.prototype = Object.create(TreeES5.prototype);
  MapleES5.prototype.constructor = MapleES5;

  MapleES5.prototype.changeSeason = function(season) {
    TreeES5.prototype.changeSeason.call(this, season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }

  MapleES5.prototype.gatherSyrup = function() {
    this.syrupQty -= 3;
  }

  const myMaple2 = new MapleES5(15, 5);
  myMaple2.changeSeason('fall');
  myMaple2.gatherSyrup();
  myMaple2.changeSeason('spring');

  //Both this code and the ES6 code we saw earlier perform exactly the same functionality.

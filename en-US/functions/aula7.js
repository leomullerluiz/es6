/*
===========================================
    Lesson 7: Working with subclasses
===========================================

Just like with most of the new features, the syntax is much clearer and requires far less code to create a subclass using class, super, and extends

Remember that, under the hood, the same connections are made between functions and prototypes.

super must be called before this
Inside a subclass's constructor function, before the this keyword can be used, a call to the super class must be made.
*/

class Apple {}
class GrannySmith extends Apple {
  constructor(tartnessLevel, energy) {
    this.tartnessLevel = tartnessLevel; // `this` before `super` will throw an error!
    super(energy);
  }
}


// Instructions:
// Create a Bicycle subclass that extends the Vehicle class. The Bicycle subclass should override Bicycle's constructor function by changing the default values of wheels from 4 to 2 and horn from 'beep beep' to 'honk honk'.


/*
 * Programming Quiz: Building Classes and Subclasses (2-3)
 */

class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
}

// your code goes here

// Solution:

class Bicycle extends Vehicle {
	constructor(color, wheels = 2, horn = 'honk honk') {
		super(color, wheels, horn);
	}
}

/* testing */

const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk

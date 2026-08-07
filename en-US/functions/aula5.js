/*
===========================================
    Lesson 5: Defaults and array destructuring
===========================================
It's possible to combine default parameters with destructuring to create very powerful functions!
*/

function createGrid([width = 5, height = 5]) {
    return `Generates a ${width} x ${height} grid`;
  }

  createGrid([]); // Generates a 5 x 5 grid
  createGrid([2]); // Generates a 2 x 5 grid
  createGrid([2, 3]); // Generates a 2 x 3 grid
  createGrid([undefined, 3]); // Generates a 5 x 3 grid

//   The createGrid() function expects an array as a parameter and uses destructuring to extract the array's first item and pass it in for the width variable, and does the same with the array's second item, passing it in for the height parameter. If the array is empty or only has one of the two items, the default parameters kick in and provide their value for whichever variables are missing.

// There's a problem with the createGrid() function. The code below won't work:


createGrid();
//Output: Uncaught TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined

// This throws an error because createGrid() expects an array as a parameter, so it can perform the destructuring process. Since the function was called without passing an array, an error occurs, but we can use default function parameters to fix the problem!

function createGrid([width = 5, height = 5] = []) {
    return `Generating a grid of ${width} by ${height}`;
  }

//   Notice the new = [] in the function's parameter list. If createGrid() is called with no arguments at all, the default value kicks in, meaning an empty array is passed in as the parameter. If the method receives the empty array, there are no values to destructure and assign to the width and height variables, so their default values are applied. So, adding the = [] as the default for the entire parameter, the following code will work:


createGrid(); // Generates a 5 x 5 grid



//Defaults and object destructuring
// Just like array destructuring can be combined with array defaults, a function can have a default object parameter and use object destructuring:


function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
  }

  createSundae({}); // Your sundae has 1 scoop with Hot Fudge toppings.
  createSundae({scoops: 2}); // Your sundae has 2 scoops with Hot Fudge toppings.
  createSundae({scoops: 2, toppings: ['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
  createSundae({toppings: ['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.


//   Just like the previous array example, if you call the function with no arguments, it won't work:
createSundae(); // Output: Uncaught TypeError: Cannot match against 'undefined' or 'null'.

// We can prevent this problem by providing a default object for the function:

function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
  }

//   Adding an empty object as the default parameter for cases where no argument is passed to the function lets the function be called with no parameters at all without throwing errors.


function buildHouse({floors = 1, color = 'red', wallls = 'brick'} = {}) {
    return `Your house gas ${floors} floor(s) with ${color} ${wallls} walls.`;
}

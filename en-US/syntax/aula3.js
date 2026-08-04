/*

===========================================
            Lesson 3: Destructuring
===========================================

In ES6, you can extract data from arrays and objects into separate variables using destructuring.

This is probably similar to something you've done before. For example, take a look at the two snippets below, which extract data using pre-ES6 techniques:

*/

const point = [10, 25, -34];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);
//Output: 10 25 -34

/*
    The example above shows extracting values from an array.
*/

const gemstone = {
    type: 'quartz',
    color: 'rose',
    karat: 21.29
};

const type = gemstone.type;
const color = gemstone.color;
const karat = gemstone.karat;

console.log(type, color, karat);
//Output: quartz rose 21.29

/*
And this example shows extracting values from an object.

Both are pretty simple; however, neither of these examples used destructuring.

So what exactly is destructuring?
*/

/*
Destructuring:
Destructuring lets you specify the elements you want to extract from an array or an object on the left-hand side of an assignment. This might sound a little strange, but it lets you reach the same result as before, using much less code, while remaining easy to understand.

Let's look at the two examples again, now rewritten using destructuring.

Using destructuring to extract values from an array:
*/
const point2 = [10, 25, -34];

const [a, b, c] = point2;

console.log(a, b, c);
//Output: 10 25 -34

/*

In this example, the square brackets represent the array being destructured, while x, y, and z represent the variables where you want to store the values extracted from the array. Notice that you don't need to specify the indexes the values should be extracted from, since they're implicit (they follow the order of the array's elements).


TIP: you can skip values when destructuring arrays. For example, const [x, , z] = point; will skip the y coordinate and discard it.


*/


let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
let [first, second, third] = positions;
console.log(second);
//Output: Jarrod
/*
The variables first, second, and third are populated with the first 3 values in the positions array, while the remaining values are ignored.
*/

/* Using destructuring to extract values from an object */
const gemstone2 = {
    type2: 'quartz',
    color2: 'rose',
    karat2: 21.29
};

const { type2, color2, karat2 } = gemstone2;

console.log(type2, color2, karat2);
//Output: quartz rose 21.29

/*
  In this example, the curly braces { } represent the object being destructured, and the variables type, color, and karat represent where you want to store the object's properties. Notice that you don't need to specify the property the values are extracted from, because, since the gemstone object has a property named type, its value is automatically stored in the declared type variable. Likewise, gemstone has a color property, so the value of color is automatically stored in the color variable (created with the same name as the object's property). The same happens with karat.
  TIP: you can also specify the values you want to select when destructuring an object. For example, let {color} = gemstone; will select only the color property from the gemstone object.
*/

const circle = {
    radius: 10,
    color: 'orange',
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getCircumference: function () {
        return 2 * Math.PI * this.radius;
    }
};

let { radius, getArea, getCircumference } = circle;

/*
Calling getArea() will return NaN. When you destructure the object and store the getArea() method in a getArea variable, it can no longer access this from the circle object, which results in an area that is NaN.
*/

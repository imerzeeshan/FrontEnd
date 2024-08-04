/*Qs1. Square and sum the array elements using the arrow function and then find the
average of the array. */

// let arr = [3,2,5,63,7];

// let sqrt = arr.map((num) => num*num);
// console.log(sqrt);

// const sum = arr.reduce((sm,el) => sm+el);
// console.log(sum);





/*Qs2. Create a new array using the map function whose each element is equal to the
original element plus 5. */

// let arr = [4,5,7,3,4,8,9];

// const nums = arr.map( (el) => el+5);
// nums.forEach((e) => {
//     console.log(e);
// });



/*Qs3. Create a new array whose elements are in uppercase of words present in the
original array */

// let arr = ["Zeeshan","Shadab","Najeeb","moassar"];

// const newArr = arr.map( (str) => str.toUpperCase());
// console.log(newArr);





/*Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled. */

// const doubleAndReturnArgs = (arr,...args) => [
//     ...arr,
//     ...args.map( (num) => num*2)
// ];

// console.log(doubleAndReturnArgs([3,4,5,2],3,4,5));



/*Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object. */

const obj1 = {
    name: "zeeshan",
    marks: 97
}
const obj2 = {
    id: 'imerzeeshan',
    pass: "zeeshan@gmail.com"
}
const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});

let ans = mergeObjects(obj1,obj2);

console.log(ans);
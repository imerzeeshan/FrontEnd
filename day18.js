/*Qs1. Create a program that generates a random number representing a dice roll.
[The number should be between 1 and 6]. */

// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);




/*Qs2. Create an object representing a car that stores the following properties for the
car: name, model, color.
Print the car’s name. */

// let car = {
//     name: "BMW",
//     model: 2020,
//     color: "Red"
// }
// console.log(car.name);



/*Qs3. Create an object Person with their name, age and city.
Edit their city’s original value to change it to “New York”.
Add a new property country and set it to the United States. */

let person = {
    name: "Md Zeeshan",
    age: 21,
    city: "Samastipur"
}
console.log(person);

person.city = "New York";
person.country = "United States";

console.log(person);
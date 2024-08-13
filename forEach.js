let arr = [1,2,3,4,5];

// let print = function(el){
//     console.log(el);
// }

// arr.forEach(print);



// arr.forEach(function(el) {
//     console.log(el);
// });




// arr.forEach( (el) => {
//     console.log(el);
// });




let student = [{
    name: "zeeshan",
    marks: 97
},
{
    name: "najeeb",
    marks: 90
},
{
    name: "moassir",
    marks: 95
}];

// student.forEach( (std) => {
//     console.log(std.marks);
// })


let double = student.map( (el) => {
    return el.marks/10;
});

console.log(double);
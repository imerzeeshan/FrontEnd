/*Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3] */

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);



 

/*Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6 */

// let num = 287152;
// let count = 0;
// let copy = num;

// while(copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);




/*Qs3. Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25 */

// let num = 287152;

// let sum = 0;

// let copy = num;

// while(copy > 0){
//     let mod = copy % 10;
//     sum = sum + mod;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);




/*Qs4. Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer. ]
Example :
7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
5! (factorial of 5) = 1x2x3x4x5 = 120
3! (factorial of 3) = 1x2x3 = 6
0! Is always 1 */

// let num = 7;
// let fact = 1;
// let copy = num;

// while(copy > 0){
//     fact = fact * copy;
//     copy--;
// }
// console.log(fact);



/*Qs5. Find the largest number in an array with only positive numbers. */

let arr = [4,5,16,3,7,8];

let largest = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
console.log(largest);
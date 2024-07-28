/*Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [7, 9, 0]*/

// let arr = [4,2,5,7,6];
// let n = 3;

// let ans = arr.slice(0,n);
// console.log(ans);




/*QS2. Write a JavaScript program to get the last n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [9, 0, -2]
*/

// let arr = [7,9,0,-2];
// let n = 3;

// let ans = arr.slice(arr.length-n);
// console.log(ans);



/*Qs3. Write a JavaScript program to check whether a string is blank or not */
// let str = prompt("Enter the string;");

// if(str.length == 0){
//     console.log("The String is Empty:");
// }else{
//     console.log("The String is Not Empty:");
// }




/*Qs4. Write a JavaScript program to test whether the character at the given (character)
index is lower case.*/

// let str = "ImerZeeshan";
// let idx = 5;
// if(str[idx] == str[idx].toLocaleLowerCase()){
//     console.log("Character is LowerCase");
// }else{
//     console.log("Character is Not LowerCase-");
// }




/*Qs5. Write a JavaScript program to strip leading and trailing spaces from a string. */

// let str = "                         I am erzeeshan. frome ASCT Bhopal:                  ";

// console.log(`Original Sting : ${str}`);

// console.log(`After Trim string: ${str.trim()}`);





/*Qs6. Write a JavaScript program to check if an element exists in an array or not. */

let arr = ["zeeshan", 'a', 'b', 99, 34, -34];

let item = "b";

if(arr.indexOf(item) != -1){
    console.log("Element Exist in the Array");
}else{
    console.log("Element Doesn't Exist in The Aray");
}
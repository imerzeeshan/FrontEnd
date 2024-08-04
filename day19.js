/*Qs1. Write a JavaScript function that returns array elements larger than a number. */
// function largeNumber(arr,num){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > num){
//             console.log(arr[i]);
//         }
//     }
// }




// let arr = [4,5,7,2,3,9,7];
// let num = 5;

// largeNumber(arr,num);




/*Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh” ans = “abcdefgh”
*/
// function uniqueChar(str){
//     let ans = "";
//     for(let i=0; i<str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1){
//             ans += currChar;
//         }
//     }
//     return ans;
// }

// let str = "abcdabcdefgggh";
// console.log(uniqueChar(str));




/*Qs3. Write a JavaScript function that accepts a list of country names as input and
returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"] output :
"United States of America" */

// let  country = ["Australia", "Germany", "United States of America"];

// function countryName(country){
//     let len = 0;
//     let name = "";
//     for(let i=0; i<country.length; i++){
//         if(country[i].length > len){
//             len = country[i].length;
//             name = country[i];
//         }
//     }
//     console.log(name);
//     return len;
// }

// console.log(countryName(country));





/*Qs4. Write a JavaScript function to count the number of vowels in a String
argument. */

// let str = "i am er Zeeshan";

// function countVowels(str){
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         if( str[i] == 'a' || 
//             str[i] == 'e' || 
//             str[i] == 'i' || 
//             str[i] == 'o' || 
//             str[i] == 'u' || 
//             str[i] == 'A' || 
//             str[i] == 'E' || 
//             str[i] == 'I' || 
//             str[i] == 'O' || 
//             str[i] == 'U'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels(str));





/*Qs5. Write a JavaScript function to generate a random number within a range
(start, end). */

let start = 5;
let end = 10;

function genRandom(srt,end){
    return Math.floor(Math.random() * (end-srt)) + (start+1);
}

console.log(genRandom(start,end));
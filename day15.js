//-----------Q1---------
// let num = 99;

// if(num%10==0){
//     console.log("Good");
// }else{
//     console.log("Bad");
// }
 


//-----------Q2-----------
// let name = prompt("Enter Your Name:)");
// let age = prompt("Enter Your Age:)");

// alert(`${name} is ${age} year old`);



//------------Q3--------------

// let ans = 3;

// switch(ans){
//     case 1: console.log("January, Febraury, March");
//     break;

//     case 2: console.log("April, May, June");
//     break;

//     case 3: console.log("July, August, September");
//     break;

//     case 4: console.log("October, November, December");
//     break;

//     default: console.log("Invalid Input");
// }



//-----------Q4-----------------
// const str = prompt("Enter a string!");

// if((str[0] == "A" || str[0] =="a") && str.length > 5){
//     console.log("Golden String");
// }else{
//     console.log("Not Golden String");
// }




//-------------------Q5---------------
// let a = prompt("enter a first Number");
// let b = prompt("enter a second Number");
// let c = prompt("enter a third Number");

// console.log("a= ",a+", b= ",b+", c= ",c);

// if(a > b){
//     if(a > c){
//         console.log("a is greatest value ",a);
//     }else{
//         console.log("c is greatest value ",c);
//     }
// }else{
//     if(b > c){
//         console.log("b is greates value ",b);
//     }
//     else{
//         console.log("c is greates value ",c);
//     }
// }



//-----------Q6------------
let a = prompt("Enter the first Number");
let b = prompt("Enter the second Number");

let m1 = a%10

if(a%10 == b%10){
    console.log(a+" and "+b+" have the same last digit is "+ a%10);
}else{
    console.log("a and b have not the same last digit");
}
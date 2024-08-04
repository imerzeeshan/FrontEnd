//------------Q1---------------
// let arr = [3,4,5,2,6];

// const arrayAverage = (arr) => { 
//     let total = 0;
//     for(num of arr){
//         total += num;
//     }
//     return total/arr.length;
// };

// console.log(arrayAverage(arr));




//--------------Q2-------------
// const isEven = (num) => {
//     if(num%2 == 0){
//         return console.log("Even");
//     }
//     return console.log("Not Even");
// }

// isEven(6);


//-----------Q3------------
// const object = {
//     message: 'Hello World',

//     logMessage(){
//         console.log(this.message);
//     }
// }
// setTimeout(object.logMessage, 1000)




//-----------Q4--------
let length = 4;
function callback() {
    console.log(this.length);
}
const object = {
    length: 5,
    method(callback){
        callback();
    }
};

object.method(callback,1,2);
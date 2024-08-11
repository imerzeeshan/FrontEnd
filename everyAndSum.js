let arr = [10,20,40,20,1];

// let ans = arr.every( el => (el%2 == 0));
// console.log(ans);


// let ans = arr.some( el => (el%2 == 0));
// console.log(ans);




// let ans = arr.reduce((res,el) => res+el);

// console.log(ans);




// let max = arr.reduce( (max,el) => {
//     if(max > el) {
//         return max;
//     }else{
//         return el;
//     }
// });
// console.log(max);


 

// let ans = arr.every(el => (el%10==0));
// console.log(ans);



function getMinimum(num){
    let min = num.reduce( (min,el) => {
        if(min > el){
            return el;
        }else{
            return min;
        }
    });
    return min;
}
console.log(getMinimum(arr));
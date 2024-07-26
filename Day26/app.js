// async function greet() {
//     return "hello world!";
// }

// greet();


//-----------------------------------------

// h1 = document.querySelector("h1");

// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if(num < 3) {
//                 reject('promise rejected');
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//         }, 1000);
//     });
// }

// async function demo(){
//     try {
//         await changeColor("red");
//         await changeColor("orange", 1000);
//         await changeColor("green", 1000);
//         await changeColor("blue", 1000);        
//     } catch (error) {
//         console.log("error Caught");
//         console.log("promise rejected");
//     }

//     let a = 5;
//     console.log(a);
//     console.log("new number = ", a+3);
// }




//----------------API's-----------------------
// let jsonRes = '{"fact":"Ancient Egyptian family members shaved their eyebrows in mourning when the family cat died.","length":91}';


// let validRes = JSON.parse(jsonRes);

// console.log(validRes.length);


// let student = {
//     name: "Zeeshan",
//     age: 22,
//     mob: 9123275716
// }

// let jsonCon = JSON.stringify(student);
// console.log(jsonCon);




//-----------------fetch----------------------------

// let h1 = document.querySelector("h1");
let url = 'https://catfact.ninja/fact';
// let h2 = document.createElement("h2");

// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         let d = data.fact;
//         h1.innerText = d;
//         console.log(data.fact);
//         console.log(data.length);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         h2.innerText = data2.fact;
//         document.querySelector("body").append(h2);
//         console.log(data2.fact);
//     })
//     .catch((err) => {
//         console.log("ERROR - ", err);
//     });


//----------------------

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch (e) {
        console.log("error - ", e);
    }
}
let btns = document.querySelectorAll("button");
// console.dir(btn);
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");


for(let btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;

    // btn.onmouseenter = function () {
    //     console.log("you entered a button");
    // }

    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("you double clicked");
    });

    btn.addEventListener("click", changeColor);
}

// btn.onclick = function () {
//     console.log("button was clicked");
// }

function sayHello(){
    alert("hello");
}

function sayName(){
    alert("zeeshan");
}



function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "orange";
}

p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h2.addEventListener("click", changeColor);



//---------------

// let input = document.querySelector("input");

// input.addEventListener("keydown", function (event) {
//     console.log(event);
//     console.log("key = ",event.key);
//     console.log("code = ",event.code);
//     console.log("key was clicked");
// });


// input.addEventListener("keyup", function (event) {
//     console.log("key was released");
// });



//----------------------------------


let form = document.querySelector("form");

form.addEventListener("submit", function (event){
    event.preventDefault();
    
    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    
    // let user = this.elements[0];
    // let pass = this.elements[1];
    
    // console.log(user.value);
    // console.log(pass.value);

    // alert(`Hi ${user.value}, Your Password is set to ${pass.value}`);
});


let user = document.querySelector('#user');

user.addEventListener("change", function() {
    console.log("input changed");
    console.log("final value = ",this.value);
});

user.addEventListener("input", function() {
    console.log("input changed");
    console.log("final value = ",this.value);
});
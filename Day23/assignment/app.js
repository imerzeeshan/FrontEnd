const test = document.querySelector(".test");
const log = document.getElementById("log");
const input = document.querySelector("input");


input.addEventListener("keypress", function (event) {

    log.textContent += ` ${event.code}`;
});

// function logKey(event){
//     log.innerText += ` ${event.code}`;
// }

//-------------------------------
test.addEventListener("mouseout", (event) => {
    event.target.style.color = "orange";

    setTimeout(() => {
        event.target.style.color = "";
    },500);
});


// test.addEventListener("mouseleave", function(event) {
//     event.target.style.color = "blue";

//     setTimeout(() => {
//         event.target.style.color = "";
//     },1000);
// })


// --------------------------------
const element = document.querySelector("#scroll-box");
const output = document.querySelector("#output");

element.addEventListener("scroll",() => {
    output.innerHTML = "Scroll Event Fired!";

    setTimeout(() => {
        output.innerHTML = "Waiting on scroll events...";
    },1000)
})

/*Qs2. Create a button on the page using JavaScript. Add an event listener to the button
that changes the button’s color to green when it is clicked. */

let btn = document.querySelector("button");

btn.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "Green";
});


// ---------------------------------

/*Qs3. Create an input element on the page with a placeholder ”enter your name” and an
H2 heading on the page inside HTML.
The purpose of this input element is to enter a user’s name so it should only input
letters from a-z, A-Z and space (all other characters should not be detected).
Whenever the user inputs their name, their input should be dynamically visible inside
the heading.
[Please note that no other character apart from the allowed characters should be
visible in the heading] */

const inputField = document.getElementById("inp-field");
const heading = document.querySelector("#head");
// const validNameRegex = /^[a-zA-Z\s]*$/;

// inputField.addEventListener("input",function(){
//     console.log(inputField.value);

//     // 01:way
//     // let username = inputField.value;
//     // heading.innerText = username.replace(/[^a-zA-Z\s]/g, '');

//     //02:way
//     // heading.innerText = inputField.value.replace(/[^a-zA-Z\s]/g, '');

// });

    // 03:way 
    inputField.addEventListener("beforeinput", (event) => {
        /^[A-Za-z ]+$/.test(event.data) || event.preventDefault();
        
    })

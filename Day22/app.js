/*Qsl. Create a new input and button element on the page using JavaScript only. Set the
text of button to "Click me' */

let input = document.createElement("input");
let btn = document.createElement("button");

btn.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(btn);

/*Qs2. Add following attributes to the element :
-Change placeholder value of input to "username"
-Change the id of button to "btn' */

input.setAttribute("placeholder","Username");
btn.setAttribute("id","btn");
 
/*Qs3. Access the btn using the querySelector and button id. Change the button background
color to blue and text color to white. */

let button = document.querySelector("#btn");
button.classList.add("btn-color");


/*Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
Change its color to purple. */

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";

// let hOne = document.querySelector(h1)
h1.classList.add("h1style");
document.querySelector("body").append(h1);


/*Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
where Delta is bold. */

let p = document.createElement("p");
p.innerHTML = "<b>Apna College Delta Practice</b>";
document.querySelector("body").append(p);
const max = prompt("Enter the Max Number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the Number");

while(true){
    if(guess == "quit"){
        console.log("User Quit");
        break;
    }
    if(guess == random){
        console.log("You are Right! Congrats!! Random Number was", random);
        break;
    }else if(guess < random){
        guess = prompt("Hints: Your Guess was too small. Please try again.");
    }else{
        guess = prompt("Hints: Your Guess was too large. Please try again.");
    }
}
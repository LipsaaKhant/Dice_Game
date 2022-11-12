//Create 2 variables for random number from 1-6

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

//select the classes for the images

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

// set images attributes, dice1-dice6

let player1 = img1.setAttribute("src", "images/dice" +randomNumber1+ ".png");
let player2 = img2.setAttribute("src", "images/dice" +randomNumber2+ ".png");

//choose the winner

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "⛳️ Player 1 Wins!";
}
else if(randomNumber1 === randomNumber2 ){
    document.querySelector("h1").innerHTML = "🥂 DRAW!"
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins ⛳️ !"
}
'use strict'

/*
begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
then: function that plays a single round of r-p-s, 2 arguments(playerSelection, computerSelection). returns the result
`You ${lose}! ${computerSelection} beats {playerSelection}` (or vice versa with win)
playerSelection parameter must be case-insensitive

NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score
 and reports a winner or loser at the end.

Use prompt() to get input from the user
*/

/*
3**2 (order matters) = 9 combinations (rr rp rs, pr pp ps, sr sp ss), 6 combinations if order does not matter (rr rp rs, pp ps, ss)
*/

/*
to measure the distribution of random draws

let x = [];
let (let i = 0; i < 5000; i ++) {
	x[i] = Math.floor(Math.random()*3);
}

let trace = {
    x: x,
    type: 'histogram',
  };
let data = [trace];
Plotly.newPlot('myDiv', data);

*/

const returnChoice = function(choice) {
    let options = ['rock', 'paper', 'scissors'];
    let weapon;
    if (choice === 0 || choice === 1 || choice === 2) {
        weapon = options[choice];
        //console.log(weapon);
    }else {
        weapon = options[Math.floor(Math.random()*3)]; // *3 since index 0-2
    };

    return weapon;

    //return option[randomChoice];
};

//console.log(returnChoice());
let pcChoice = returnChoice();
let userChoice = returnChoice(Number(window.prompt("Pick your weapon (rock - 0, paper - 1, scissors - 2)")));

console.log(`computer: ${pcChoice}, me: ${userChoice}`);
// look up case/ switch statements

if (userChoice === pcChoice) {
    console.log('It s a draw');
}else if (userChoice === 'rock' && pcChoice === 'paper') {
    console.log('You win!');
}else if (userChoice === 'paper' && pcChoice === 'rock') {
    console.log('You loose!');
}else if (userChoice === 'rock' && pcChoice === 'scissors') {
    console.log('You win!');
}else if (userChoice === 'scissors' && pcChoice === 'rock') {
    console.log('You loose!');
}else if (userChoice === 'paper' && pcChoice === 'scissors') {
    console.log('You loose!');
}else if (userChoice === 'scissors' && pcChoice === 'paper') {
    console.log('You win!');
};

/*
switch (userChoice) {
  case pcChoice:
    console.log('It s a draw');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
*/


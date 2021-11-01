let inputs = [];
let userChoice;
let pcChoice;

const returnChoice = function (choice) {
    let options = ['rock', 'paper', 'scissors'];
    let weapon;
    if (choice === 0 || choice === 1 || choice === 2) {
        weapon = options[choice];
        //console.log(weapon);
    } else {
        weapon = options[Math.floor(Math.random() * 3)]; // *3 since index 0-2
    };

    return weapon;
};

const addInputs = (ev) => {
    ev.preventDefault();
    let input = Number(document.getElementById("weaponid").value);
    inputs.push(input);
    //alert(`added ${input}, which is a ${typeof(input)} inputs contains ${inputs}`);
    
    pcChoice = returnChoice();
    userChoice = returnChoice(input);

    alert(`User picks ${userChoice}, PC picks ${pcChoice}.`)

    if (userChoice === pcChoice) {
        alert('It s a draw. :|');
    } else if (userChoice === 'rock' && pcChoice === 'paper') {
        alert('You loose! :(');
    } else if (userChoice === 'paper' && pcChoice === 'rock') {
        alert('You win! :)');
    } else if (userChoice === 'rock' && pcChoice === 'scissors') {
        alert('You win! :)');
    } else if (userChoice === 'scissors' && pcChoice === 'rock') {
        alert('You loose! :(');
    } else if (userChoice === 'paper' && pcChoice === 'scissors') {
        alert('You loose! :(');
    } else if (userChoice === 'scissors' && pcChoice === 'paper') {
        alert('You win! :)');
    };

    document.querySelector('form').reset();
    pcChoice = returnChoice();

};



let id = document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('click', addInputs);

});

//alert(`id ${id}`);



'use strict'

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const ps = document.createElement('p');
ps.setAttribute('id', 'ps');
ps.textContent = 'Player: 0';

const cs = document.createElement('p');
cs.setAttribute('id', 'cs');
cs.textContent = 'Computer: 0';

const result = document.createElement('div');
result.setAttribute("id", 'result');

const endres = document.createElement('div');
endres.setAttribute("id", "end");

document.body.appendChild(ps);
document.body.appendChild(cs);
document.body.appendChild(result);
document.body.appendChild(endres);

btn1.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playRound('Rock', computerSelection);
});

btn2.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playRound('Paper', computerSelection);
});

btn3.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playRound('Scissor', computerSelection);
});

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 0){
        return "Rock";
    }
    else if(randomNumber === 1){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}

function playRound(playerSelection, computerSelection){
    
    endres.textContent = '';

    ps.textContent = `Player: ${playerScore}`;
    cs.textContent = `Computer: ${computerScore}`;

    if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissor'){
        playerScore++;
        ps.textContent = `Player: ${playerScore}`;
        result.textContent = `You win! You cast ${playerSelection}, ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock'){
        playerScore++;
        ps.textContent = `Player: ${playerScore}`;
        result.textContent = `You win! You cast ${playerSelection}, ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'paper'){
        playerScore++;
        ps.textContent = `Player: ${playerScore}`;
        result.textContent = `You win! You cast ${playerSelection}, ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        // It's a tie
        result.textContent = `It's a tie! You both casted ${playerSelection}`;
    }
    else{
        // User lost
        computerScore++;
        cs.textContent = `Computer: ${computerScore}`;
        result.textContent = `You lost! You cast ${playerSelection}, ${computerSelection} beats ${playerSelection}`;
    }

    if(playerScore == 5){
        endres.textContent = `Yay!! You won ${playerScore} to ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
    if(computerScore == 5){
        endres.textContent = `Oh oh you lost, try again!!!`;
        playerScore = 0;
        computerScore = 0;
    }
}

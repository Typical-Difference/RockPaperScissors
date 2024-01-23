'use strict'

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const ps = document.createElement('p');
ps.setAttribute('id', 'ps');
ps.textContent = 0;
//btn3.appendChild(ps);

const cs = document.createElement('p');
cs.setAttribute('id', 'cs');
cs.textContent = 0;
//ps.appendChild(cs);

const result = document.createElement('div');
result.setAttribute("id", 'result');
result.appendChild(ps);
result.appendChild(cs);
btn3.appendChild(result);

btn1.addEventListener('click', () =>{
    playRound('Rock', computerSelection);
});

btn2.addEventListener('click', () => {
    playRound('Paper', computerSelection);
});

btn3.addEventListener('click', () => {
    playRound('Scissors', computerSelection);
});

let playerScore = 0;
let computerScore = 0;

let computerSelection = null;
let playerSelection = null;

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

    if(playerSelection.toLowerCase() === 'Rock'.toLowerCase() && computerSelection.toLowerCase() === 'Scissor'.toLowerCase()){
        playerScore = playerScore + 1;
        //return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection.toLowerCase() === 'Paper'.toLowerCase() && computerSelection.toLowerCase() === 'Rock'.toLowerCase()){
        playerScore = playerScore + 1;
        //return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection.toLowerCase() === 'Scissor'.toLowerCase() && computerSelection.toLowerCase() === 'Paper'.toLowerCase()){
        playerScore = playerScore + 1;
        //return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        //return "Tie";
    }
    else{
        computerScore = computerScore + 1;
        //return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    ps.textContent = `Player: ${playerScore}`;
    cs.textContent = `Computer: ${computerScore}`;
}

function game(){

    computerSelection = getComputerChoice();
    playerSelection = prompt('Input your choice!');
    playRound(playerSelection, computerSelection);
    


//console.log(game(), computerSelection, playerSelection);
}
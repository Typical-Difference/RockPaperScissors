'use strict'

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

let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    if(playerSelection === 'Rock' && computerSelection === 'Scissor'){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === 'Scissor' && computerSelection === 'Paper'){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === computerSelection){
        return "Tie";
    }
    else{
        return `You Lose! ${playerSelection} beats ${computerSelection}`;
    }
}

//console.log(getComputerChoice());

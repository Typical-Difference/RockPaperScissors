'use strict'


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

function game(){

    computerSelection = getComputerChoice();
    playerSelection = prompt('Input your choice!');
    playRound(playerSelection, computerSelection);
    
    function playRound(playerSelection, computerSelection){
        if(playerSelection.toLowerCase() === 'Rock'.toLowerCase() && computerSelection.toLowerCase() === 'Scissor'.toLowerCase()){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
        else if(playerSelection.toLowerCase() === 'Paper'.toLowerCase() && computerSelection.toLowerCase() === 'Rock'.toLowerCase()){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
        else if(playerSelection.toLowerCase() === 'Scissor'.toLowerCase() && computerSelection.toLowerCase() === 'Paper'.toLowerCase()){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
        else if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
            return "Tie";
        }
        else{
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    console.log(playRound(playerSelection, computerSelection));

}
game();


//console.log(game(), computerSelection, playerSelection);
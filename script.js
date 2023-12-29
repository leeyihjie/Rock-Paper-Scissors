// Functions go in script.js instead of in index.html



function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        move = "paper";
    } else if (choice == 1){
        move = "rock";
    }
    else {
        move = "scissors";
    }

    return move;
}

function getPlayerChoice() {
    playerChoice = prompt("Choose rock, paper or scissors");
    playerChoiceLower =  playerChoice.toLowerCase();
    while(playerChoiceLower != 'rock' && playerChoiceLower != 'paper' && playerChoiceLower != 'scissors') {
        console.log("Please input either Rock, Paper or Scissors only");
        getPlayerChoice();
    }
    return playerChoiceLower;
}

function PlayOneRound(playerSelection, computerSelection) {
    while (playerSelection != computerSelection) {
        if (playerSelection == 'rock' && computerSelection == 'paper') {
            console.log("You Lose! Paper beats Rock");
            return "computer";
        }
        else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            console.log("You Win! Rock beats Scissors");
            return "player";
        }
        else if (playerSelection == 'paper' && computerSelection == 'rock') {
            console.log("You Win! Paper beats Rock");
            return "player";
        }
        else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            console.log("You Lose! Scissors beats Paper");
            return "computer";
        }
        else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            console.log("You Win! Scissors beats Paper");
            return "player";
        }
        else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            console.log("You Lose! Rock beats Scissors");
            return "computer";
        }
    }
    console.log("It's a Draw! Try again!");
    return "tie";
}

function PlayGame() {
    console.log("Beat the Computer 5 times to win!")
    let playerScore = 0;
    let computerScore = 0;
    let winner = '';

    while(playerScore < 5 && computerScore < 5) {
        console.log("Current Score: Player = " + playerScore + ", Computer = " + computerScore)
        CompChoice = getComputerChoice();
        PlayChoice = getPlayerChoice();
        
        result = PlayOneRound(PlayChoice, CompChoice);
        if (result == 'player') {
            playerScore += 1;
        }
        else if (result == 'computer') {
            computerScore += 1;
        }
    }
    if (playerScore > computerScore) {
        console.log("You have won! :D");
        winner = "Player";
    }
    else {
        console.log("You have lost! Try again next time! :(");
        console.log("Final Score: Player = " + playerScore + ", Computer = " + computerScore)
        winner = "AI";
    }
}

PlayGame();
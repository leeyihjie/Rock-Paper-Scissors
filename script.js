// Functions go in script.js instead of in index.html

let playerScore = 0;
let computerScore = 0;
let winner = '';


const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playerScoreP = document.querySelector('#playerscore');
const computerScoreP = document.querySelector('#computerscore');
const resultP = document.querySelector('#roundresult');
const totalResultH1 = document.querySelector('#totalresult');

rockBtn.addEventListener('click', function() {
    PlayOneRound('ROCK');
})

paperBtn.addEventListener('click', function() {
    PlayOneRound('PAPER');
})

scissorsBtn.addEventListener('click', function() {
    PlayOneRound('SCISSORS');
})


function getComputerChoice() {
    var choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        var compMove = "ROCK";
    } else if (choice == 1){
        compMove = "PAPER";
    } else {
        compMove = "SCISSORS";
    }
    return compMove;
}

function getResult(playerS, computerS) {
    if (playerS == 'ROCK' && computerS == 'PAPER') {
        resultP.textContent = `You played ${playerS}, Computer played ${computerS}. 
        You lose!`;
        return "LOSS";
    }
    else if (playerS == 'ROCK' && computerS == 'SCISSORS') {
        resultP.textContent = `You played ${playerS}, Computer played ${computerS}. 
        You win!`;
        return "WIN";
    }
    else if (playerS == 'PAPER' && computerS == 'SCISSORS') {
        resultP.textContent = `You played ${playerS}, Computer played ${computerS}. 
        You lose!`;
        return "LOSS";
    }
    else if (playerS == 'PAPER' && computerS == 'ROCK') {
        resultP.textContent = `You played ${playerS}, Computer played ${computerS}. 
        You win!`;
        return "WIN";
    }
    else if (playerS == 'SCISSORS' && computerS == 'ROCK') {
        resultP.textContent = `You played ${playerS}, Computer played ${computerS}. 
        You lose!`;
        return "LOSS";
    }
    else if (playerS == 'SCISSORS' && computerS == 'PAPER') {
        resultP.textContent = `You played ${playerS}, Computer played ${computerS}. 
        You win!`;
        return "WIN";
    }
    else {
        resultP.textContent = `You played ${playerS}, Computer played ${computerS}. 
        It's a draw!`;
        return "DRAW";
    };
}

function PlayOneRound(playerSelection) {
    compSelection = getComputerChoice();
    var result = getResult(playerSelection, compSelection);
    console.log(result);

    if (result == 'WIN') {
        playerScore += 1;
    }
    else if (result == 'LOSS') {
        computerScore += 1;
    }
    playerScoreP.textContent = `Player Score: ${playerScore}`;
    computerScoreP.textContent = `Computer Score: ${computerScore}`;

    if (playerScore == 5) {
        totalResultH1.textContent = `You have won! :D`;
    }
    else if (computerScore == 5) {
        totalResultH1.textContent = `You have lost! Try again next time! :(`;
    }
};

/*
    Pseudocode:

    Things needed:
        - Computer choice
        -Player choice
        -Comparison logic for who wins
        -Main func to put all pieces together and run game
*/

//Start scores of both human and computer at 0
let humanScore = 0;
let computerScore = 0;

//update DOM with scores
const resultDisplay = document.querySelector('.result');
function updateScores() {
    resultDisplay.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
}

let getComputerChoice = function() {
    let choice = Math.random() * 3; //choice is between 0 and 3 (non-inclusive)

    if (choice < 1) {
        return 'rock';
    } else if (choice < 2){
        return 'scissors';
    } else {
        return 'paper';
    }
};

let getHumanChoice; // = () => prompt("Pick either rock, paper, or scissors: ");

let playRound = function(computerChoice, humanChoice) {
    //REVIEW notes: could have made this more efficient by combining cases
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice == 'rock') {
        if (computerChoice == 'rock') {
            console.log("Tie!");
        }
        else if (computerChoice == 'paper') {
            console.log("You lose, paper captures rock oop");
            computerScore++;
        }
        else {
            console.log("You win! Rock crushes scissors");
            humanScore++;
        }
    }
    if (humanChoice == 'paper') {
        if (computerChoice == 'paper') {
            console.log("Tie!");
        }
        else if (computerChoice == 'scissors') {
            console.log("You lose, scissors cuts paper owie");
            computerScore++;
        }
        else {
            console.log("You win! Paper captures rock!");
            humanScore++;
        }
    }
    if (humanChoice == 'scissors') {
        if (computerChoice == 'scissors') {
            console.log("Tie!");
        }
        else if (computerChoice == 'rock') {
            console.log("You lose, rock crushes scissors ouchie");
            computerScore++;
        }
        else {
            console.log("You win! Scissors cuts paper whee");
            humanScore++;
        }
    }

    updateScores();
    if ((humanScore + computerScore) === 5) playGame();
};

let playGame = function() {
    //for(let i = 0; i < 5; i++) {
        //playRound(getComputerChoice(), getHumanChoice());
    //}

    if(humanScore > computerScore) console.log('You win!');
    else if (humanScore == computerScore) console.log('Tied by RNG');
    else console.log('Beat by RNG?? Oop.');

    humanScore = 0;
    computerScore = 0;
    updateScores();
}

//add button functionality
const buttons = document.querySelectorAll("#btn");
buttons.forEach((button) => {

    button.addEventListener ("click", () => {

        if (button.classList.contains("rock")) humanChoice = "rock";
        else if (button.classList.contains("paper")) humanChoice = "paper";
        else humanChoice = "scissors";

        playRound(getComputerChoice(), humanChoice);
    });
});

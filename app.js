const ComputerChoiceDisplay = document.getElementById( 'computer-choice');
const UserChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice
let ComputerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    UserChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) +1 // or you can use possibleeChoices.length
    if (randomNumber === 1) {
     computerChoice = 'rock'
    }
    if (randomNumber === 2) {
     computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
     computerChoice = 'paper'
    }
 ComputerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "it is a draw"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "you win 🏆"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "you lost again"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "you win"
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "you lose"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "you win"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "you lose"
    }
    resultDisplay.innerHTML = result
}
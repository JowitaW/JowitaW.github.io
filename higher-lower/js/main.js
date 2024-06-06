//dobbelstenen variable
const diceArray = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];

//elementen die vanuit html zijn opgehaal om functies aan toe te voegen zodat de knoppen werken
const computerCreditsElement = document.querySelector('.computer-credits');
const playerCreditsElement = document.querySelector('.player-credits');
const computerDiceElements = document.querySelectorAll('.computer-dice-one, .computer-dice-two');
const playerDiceElements = document.querySelectorAll('.player-dice-one, .player-dice-two');
const messageBox = document.querySelector('.message-box');
const diceButton = document.querySelector('.dice-button');
const higherButton = document.querySelector('.higher-button');
const lowerButton = document.querySelector('.lower-button');
const goButton = document.querySelector('.go-button');

//status van de game voor dat de game begint 
let computerCredits = 0;
let playerCredits = 0;
let computerRoll = [0, 0];
let playerRoll = [0, 0];
let isGameOver = true;

//functie om te rollen en een update van UI = user interface 
function rollDice(diceElement, roll) {
    const randomArray = Math.floor(Math.random() * 6);
    diceElement.innerHTML = diceArray[randomArray];
    roll[0] = randomArray + 1;
}

//event listener voor de 'go' knop om een nieuw spel te starten
goButton.addEventListener('click', () => {
    if (isGameOver) {
        playerCredits = 20;
        computerCredits = 20;
        computerCreditsElement.textContent = computerCredits;
        playerCreditsElement.textContent = playerCredits;
        isGameOver = false;
        messageBox.textContent = 'Het spel is begonnen, gooi de dobbelsteen!';
    }
});

//event listener voor de gooi dobbelsteen knop
diceButton.addEventListener('click', () => {
    if (isGameOver) {
        messageBox.textContent = 'Druk op Go om het spel te starten';
        return;
    }

    rollDice(computerDiceElements[0], computerRoll);
    rollDice(computerDiceElements[1], computerRoll);

    rollDice(playerDiceElements[0], playerRoll);
    rollDice(playerDiceElements[1], playerRoll);

    //enable de hoger en lager knoppen
    higherButton.disabled = false;
    lowerButton.disabled = false;
    diceButton.disabled = true;
    messageBox.textContent = 'Kies je voor hoger of lager?';
});

// Event listener voor de hoger knop
higherButton.addEventListener('click', () => {
    if (isGameOver) return;
    updateCredits(5, true);
    endRound();
    messageBox.textContent = 'Je hebt voor hoger gekozen.';
});

// Event listener voor de lager knop
lowerButton.addEventListener('click', () => {
    if (isGameOver) return;
    updateCredits(5, false);
    endRound();
    messageBox.textContent = 'Je hebt voor lager gekozen.';
});

//functie om het ronde te beindigen en de gooi dobbelsteen knop te enabelen
function endRound() {
    higherButton.disabled = true;
    lowerButton.disabled = true;
    diceButton.disabled = false;
}

// Functie om de winnaar te bepalen
function determineWinner() {
    if (playerCredits <= 0 || computerCredits <= 0) {
        isGameOver = true;
        if (playerCredits > computerCredits) {
            messageBox.textContent = 'Gefeliciteerd! Je hebt gewonnen!';
        } else if (computerCredits > playerCredits) {
            messageBox.textContent = 'Helaas, je hebt verloren.';
        }
    }
}

// Voeg de determineWinner-functie toe aan de updateCredits-functie
function updateCredits(betAmount, isHigher) {
    const computerTotal = computerRoll[0] + computerRoll[1];
    const playerTotal = playerRoll[0] + playerRoll[1];

    if (isHigher && playerTotal > computerTotal) {
        playerCredits += betAmount;
        computerCredits -= betAmount;
    } else if (!isHigher && playerTotal < computerTotal) {
        playerCredits += betAmount;
        computerCredits -= betAmount;
    } else {
        playerCredits -= betAmount;
        computerCredits += betAmount;
    }

    // Credits-elementen bijwerken
    computerCreditsElement.textContent = computerCredits;
    playerCreditsElement.textContent = playerCredits;

    determineWinner(); // Controleren wie de winnaar is
}
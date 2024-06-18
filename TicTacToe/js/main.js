//Different HTML-elements that are picked up in order to use them as an interaction 
const boxes = document.querySelectorAll('.box');
let playerText = document.querySelector('#playerText');
const restartButton = document.querySelector('.restart-button');
const togglePlayerButton = document.querySelector('#togglePlayer');
const button = document.querySelector('.btn');
const buttonTwo = document.querySelector('.btn-two');
let username = document.querySelector('.user');
let usernameTwo = document.querySelector('.user_two');
const usernameField = document.querySelector('.username-input');
const usernameFieldTwo = document.querySelector('.username-input-two');
let scorePointsX = document.querySelector('.score-points-x');
let scorePointsO = document.querySelector('.score-points-o');

//Declarated variables to keep track of the current player, the gameboard, status of the game and scores.
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let againstComputer = true;
let scoreX = 0;
let scoreO = 0;
playerText.innerText = 'Boter Kaas Eiren'

//This is a function that is being called when one of the boxes is clicked, it "takes care" of the game logic
const boxClicked = (index) => {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        boxes[index].innerText = currentPlayer;

        if (checkWin()) {
            playerText.innerText = `${currentPlayer} wins!`;
            updateScores();
            gameActive = false;
        } else if (checkDraw()) {
            playerText.innerText = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            playerText.innerText = againstComputer ? `Player ${currentPlayer}'s turn` : `Player ${currentPlayer}'s turn`;

            if (againstComputer && currentPlayer === 'O' && gameActive) {
                makeComputerMove();
            }
        }
    }
};

//A function which determinants the computers move, its being called when its the computers turn
const makeComputerMove = () => {
    const emptyIndices = gameBoard.reduce((indices, value, index) => {
        if (value === '') {
            indices.push(index);
        }
        return indices;
    }, []);

    if (emptyIndices.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyIndices.length);
        const computerMove = emptyIndices[randomIndex];

        setTimeout(() => {
            boxClicked(computerMove);
        }, 800); // Optional delay to simulate the computer's "thinking" time
    }
};

//These are the eventlisteners that react to the button and buttonTwo which cause that the input name are being show on the screen as player names
button.addEventListener('click', function () {
    console.log('clicked');
    console.log(username.textContent = usernameField.value)
});
buttonTwo.addEventListener('click', function () {
    console.log('clicked');
    console.log(usernameTwo.textContent = usernameFieldTwo.value)
});

//A function which determaints if the player won by comparing the possible winningcombos
const checkWin = () => {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winningCombos.some(combo => (
        gameBoard[combo[0]] !== '' &&
        gameBoard[combo[0]] === gameBoard[combo[1]] &&
        gameBoard[combo[1]] === gameBoard[combo[2]]
    ));
};

//This function is being called when there is a winner so the points can be updated based on the current player 
const updateScores = () => {
    if (currentPlayer === 'X') {
        scoreX++;
        scorePointsX.textContent = scoreX;
    } else if (currentPlayer === 'O') {
        scoreO++;
        scorePointsO.textContent = scoreO;
    }
};

//Function that checks if the game ends in a draw if all the boxes are filled without a winningcombination
const checkDraw = () => {
    return gameBoard.every(box => box !== '');
};

//This function restarts the game by puttin all the variables to its original positions to restart the game board
const restartGame = () => {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    boxes.forEach((box, index) => {
        box.innerText = '';
        box.addEventListener('click', () => boxClicked(index));
    });

    playerText.innerText = againstComputer ? `Player ${currentPlayer}'s turn` : `Player ${currentPlayer}'s turn`;
};

//Eventlistener to restart the game 
restartButton.addEventListener('click', restartGame);

//This is an eventlisteren to chose between playing again the computer or a player
togglePlayerButton.addEventListener('click', () => {
    againstComputer = !againstComputer;
    restartGame();
});

restartGame();
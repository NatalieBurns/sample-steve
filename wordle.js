const wordList = [
    'flour', 'sugar', 'yeast', 'bread', 'cakes', 'mints', 'dough', 'sweet', 'fudge',
    'icing', 'cocoa', 'scone', 'bakes', 'crust', 'spice', 'chips', 'glaze', 'fruit',
    'candy', 'feast', 'snack', 'whisk', 'blend', 'frost', 'syrup', 'slice', 'layer',
    'creme', 'tarts', 'puffs', 'batch', 'sifts', 'spoon', 'whips', 'chill', 'rolls',
    'piecr', 'torte', 'baked', 'cools', 'dusty', 'panes', 'mixes', 'froth', 'merry',
    'angel', 'bells', 'chime', 'elfin', 'trays', 'treat'
  ];
  
const secretWord = wordList[Math.floor(Math.random() * wordList.length)];
const gameBoard = document.getElementById('game-board');

// Create game board tiles
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        gameBoard.appendChild(tile);
    }
}

function submitGuess() {
    const guessInput = document.getElementById('guess-input');
    const guess = guessInput.value.toLowerCase();
    
    // Input validation
    if (guess.length !== 5 || !wordList.includes(guess)) {
        alert('Invalid guess or word not in list.');
        return;
    }
    
    // Check guess
    const tiles = document.querySelectorAll('.tile');
    let checkIndex = 0;
    for (let i = 0; i < 30; i++) {
        if (!tiles[i].textContent) {
            checkIndex = i;
            break;
        }
    }

    for (let i = 0; i < guess.length; i++) {
        const char = guess[i];
        tiles[checkIndex + i].textContent = char.toUpperCase();
        if (secretWord[i] === char) {
            tiles[checkIndex + i].classList.add('correct');
        } else if (secretWord.includes(char)) {
            tiles[checkIndex + i].classList.add('present');
        } else {
            tiles[checkIndex + i].classList.add('absent');
        }
    }

    // Clear the input field for the next guess
    guessInput.value = '';
    guessInput.focus();

    // Check if the word is correct
    if (guess === secretWord) {
        setTimeout(() => alert('Congratulations! You guessed the word!'), 500);
    }
}

// Listen for enter key in the input field
document.getElementById('guess-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        submitGuess();
    }
});

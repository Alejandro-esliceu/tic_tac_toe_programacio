let current_player = "X";
let boardBlocked = false;
let clicked = [];

let player_clicked = {
    X: [],
    O: []
};

let player_counter = {
    X: 0,
    O: 0
};

const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle cell clicks
function handleCellClick(index) {
    if (!boardBlocked && !clicked[index]) {
        clicked[index] = current_player;
        updateBoard();
        checkWinner();
        current_player = current_player === 'X' ? 'O' : 'X';
    }
}

// Function to update the board display
function updateBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = clicked[index] || '';
    });
}

// Function to check for a winner
function checkWinner() {
    // Check winning combinations
    for (const combination of winningCombination) {
        const [a, b, c] = combination;
        if (clicked[a] && clicked[a] === clicked[b] && clicked[a] === clicked[c]) {
            alert(`Player ${clicked[a]} wins!`);
            boardBlocked = true;
            return;
        }
    }
    if (clicked.length === 9) {
        alert('It\u2019s a draw!');
    }
}

// Initialize the game

function restartGame() {
    clicked = [];
    boardBlocked = false;
    current_player = "X";
    player_clicked.X = [];
    player_clicked.O = [];

    document.getElementById('result').innerText = "";
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

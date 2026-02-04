let current_player = "X";
let boardBlocked = false;
let clicked = [];
let player_clicked = { X: [], O: [] };
let player_counter = { X: 0, O: 0 };

const winningCombination = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const restartButton = document.getElementById('restart');
   
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const index = parseInt(cell.getAttribute('data-cell'));
            handleCellClick(index);
        });
    });
   
    restartButton.addEventListener('click', restartGame);
   
    updateBoard();
});

function handleCellClick(index) {
    if (!boardBlocked && !clicked[index]) {
        clicked[index] = current_player;
        player_clicked[current_player].push(index);
        updateBoard();
        checkWinner();
       
        if (!boardBlocked) {
            current_player = current_player === 'X' ? 'O' : 'X';
        }
    }
}

function updateBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        if (clicked[index]) {
            const span = document.createElement('span');
            span.textContent = clicked[index];
            span.className = `player-${clicked[index]}`;
            cell.innerHTML = '';
            cell.appendChild(span);
        } else {
            cell.innerHTML = '';
        }
    });
}

function checkWinner() {
    for (const combination of winningCombination) {
        const [a, b, c] = combination;
        if (clicked[a] && clicked[a] === clicked[b] && clicked[a] === clicked[c]) {
            const winner = clicked[a];
            player_counter[winner]++;
            document.getElementById(`marker-${winner}`).textContent = player_counter[winner];
           
            highlightWinningCells(combination);
           
            document.getElementById('result').textContent = `Jugador ${winner} ha ganado!`;
            boardBlocked = true;
            return;
        }
    }
   
    if (clicked.filter(cell => cell !== undefined).length === 9) {
        document.getElementById('result').textContent = 'Es un empate!';
        boardBlocked = true;
    }
}

function highlightWinningCells(combination) {
    const cells = document.querySelectorAll('.cell');
    combination.forEach(index => {
        cells[index].classList.add('win-highlight');
    });
}

function restartGame() {
    clicked = [];
    boardBlocked = false;
    current_player = "X";
    player_clicked.X = [];
    player_clicked.O = [];
    document.getElementById('result').textContent = '';
   
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('win-highlight');
    });
}
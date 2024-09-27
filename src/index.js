import './css/style.css';
import goblinImg from './goblin.png';
// Constants
const boardSize = 4;
let currentCell = null;

// Function to create the game board
function createBoard() {
  const board = document.getElementById('game-board');
  board.innerHTML = ''; // Clear any previous content
  for (let i = 0; i < boardSize * boardSize; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
  }
}

// Function to get a random cell index, excluding the current one
function getRandomCell(excludeIndex) {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * (boardSize * boardSize));
  } while (randomIndex === excludeIndex);
  return randomIndex;
}

// Function to move the character
function moveCharacter() {
  const cells = document.querySelectorAll('.cell');

  // Remove character from current cell if it exists
  if (currentCell !== null) {
    cells[currentCell].innerHTML = '';
  }

  // Get a new random cell index
  const newCellIndex = getRandomCell(currentCell);
  currentCell = newCellIndex;

  // Add the character to the new cell
  const goblinElement = document.createElement('img');
  goblinElement.src = goblinImg; // Теперь используем импортированный путь
  goblinElement.classList.add('goblin');
  cells[newCellIndex].appendChild(goblinImg);
}

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
  createBoard();
  moveCharacter(); // Initial position
  setInterval(moveCharacter, 1000); // Move every 1 second
});

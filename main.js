/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// ./src/index.js

 // Путь к картинке
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

  // Убираем изображение из предыдущей клетки, если оно есть
  if (currentCell !== null) {
    cells[currentCell].innerHTML = '';
  }

  // Получаем новый случайный индекс для клетки
  const newCellIndex = getRandomCell(currentCell);
  currentCell = newCellIndex;

  // Создаем элемент изображения
  const goblinElement = document.createElement('img');
  goblinElement.src = goblin_namespaceObject; // Убедись, что путь правильный
  goblinElement.classList.add('goblin');

  // Добавляем элемент в новую клетку
  if (cells[newCellIndex]) {
    cells[newCellIndex].appendChild(goblinElement);
  } else {
    console.error('Ошибка: ячейка не найдена.');
  }
}

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
  createBoard();
  moveCharacter(); // Initial position
  setInterval(moveCharacter, 1000); // Move every 1 second
});
/******/ })()
;
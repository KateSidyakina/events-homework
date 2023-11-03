/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Gnome.js
class Gnome {
  constructor() {
    this.element = document.createElement("img");
    this.element.id = "gnome";
  }
  moveToTile(tile) {
    tile.addGnome(this);
  }
}
;// CONCATENATED MODULE: ./src/js/Score.js
class Score {
  constructor() {
    this.score = 0;
  }
  increaseScore() {
    this.score++;
    document.querySelector(".score").textContent = `Счёт: ${this.score}`;
  }
}
;// CONCATENATED MODULE: ./src/js/Tile.js
class Tile {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.element = document.createElement("div");
    this.element.classList.add("tile");
    this.element.dataset.row = row;
    this.element.dataset.col = col;
  }
  addGnome(gnome) {
    this.element.appendChild(gnome.element);
  }
  removeGnome() {
    this.element.innerHTML = "";
  }
}
;// CONCATENATED MODULE: ./src/js/Game.js



class Game {
  constructor() {
    this.board = document.querySelector(".game-container");
    this.tiles = [];
    this.gnome = new Gnome();
    this.score = new Score();
    this.missedGnomes = 0;
    this.currentGnomePosition = -1;
    this.isGameOver = false;
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        const tile = new Tile(row, col);
        this.tiles.push(tile);
        this.board.appendChild(tile.element);
      }
    }
    this.startGame();
  }
  startGame() {
    this.gameInterval = setInterval(() => {
      if (this.isGameOver) {
        clearInterval(this.gameInterval);
      } else {
        this.moveGnome();
      }
    }, 2000);
  }
  getRandomIndex() {
    let index;
    do {
      index = Math.floor(Math.random() * this.tiles.length) + 1;
    } while (index === this.currentGnomePosition);
    this.currentGnomePosition = index;
    return index;
  }
  moveGnome() {
    if (this.isGameOver) {
      return;
    }
    const randomIndex = this.getRandomIndex();
    const randomTile = this.tiles[randomIndex];
    this.gnome.moveToTile(randomTile);
    const clickHandler = () => {
      this.score.increaseScore();
      randomTile.removeGnome();
    };
    randomTile.element.addEventListener("click", clickHandler);
    setTimeout(() => {
      if (randomTile.element.contains(this.gnome.element)) {
        this.missedGnomes++;
        randomTile.removeGnome();
      }
      if (this.missedGnomes === 5) {
        this.endGame();
      }
      randomTile.element.removeEventListener("click", clickHandler);
    }, 1900);
  }
  endGame() {
    this.isGameOver = true;
    const endGameMessage = `Вы проиграли! Ваш счёт: ${this.score.score}. Повторить попытку?`;
    const isConfirmed = confirm(endGameMessage);
    if (isConfirmed) {
      window.location.reload();
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  new Game();
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;
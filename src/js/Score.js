export default class Score {
  constructor() {
    this.score = 0;
  }

  increaseScore() {
    this.score++;
    document.querySelector(".score").textContent = `Счёт: ${this.score}`;
  }
}

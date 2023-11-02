export default class Tile {
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

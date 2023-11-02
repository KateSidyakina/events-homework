export default class Gnome {
  constructor() {
    this.element = document.createElement("img");
    this.element.id = "gnome";
  }

  moveToTile(tile) {
    tile.addGnome(this);
  }
}

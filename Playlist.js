class PlaylistManager {
  constructor() {
    this.map = new Map();
    this.array = new Array();
  }

  addSong(title) {
    if (this.map.has(title)) return false;
    this.map.set(title, this.array.length);
    this.array.push(title);
    return true;
  }

  hasSong(title) {
    if (this.map.has(title)) return true;
    return false;
  }

  getCount() {
    return this.array.length;
  }

  getRandomSong() {
    if (this.array.length < 0) return null;
    const randomIndex = Math.floor(Math.random() * this.array.length);
    return this.array[randomIndex];
  }

  removeSong(title) {
    if (!this.map.has(title)) return false;

    const idx = this.map.get(title);
    const lastElement = this.array[this.array.length - 1];

    this.array[idx] = lastElement;
    this.map.set(lastElement, idx);

    this.array.pop();
    this.map.delete(title);
    return true;
  }
}

const playlist = new PlaylistManager();
console.log(playlist.addSong("Bohemian Rhapsody")); // true
console.log(playlist.addSong("Stairway to Heaven")); // true
console.log(playlist.addSong("Bohemian Rhapsody")); // false
console.log(playlist.hasSong("Stairway to Heaven")); // true
console.log(playlist.getCount()); // 2
console.log(playlist.getRandomSong()); // "Bohemian Rhapsody" ou "Stairway to Heaven"
console.log(playlist.removeSong("Bohemian Rhapsody")); // true
console.log(playlist.getCount()); // 1

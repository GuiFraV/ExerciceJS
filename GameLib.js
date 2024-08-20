class GameLibraryManager {
  constructor() {
    this.games = new Map();
    this.genreMap = new Map();
    this.gameTitles = [];
  }

  addGame(title, genre, year) {
    if (this.games.has(title)) return false;

    const game = { title, genre, year };
    this.games.set(title, game);
    this.gameTitles.push(title);

    if (!this.genreMap.has(genre)) {
      this.genreMap.set(genre, new Set());
    }
    this.genreMap.get(genre).add(title);

    return true;
  }

  hasGame(title) {
    if (!this.games.has(title)) return false;
    return true;
  }

  getCount() {
    return this.gameTitles.length;
  }

  getRandomGame() {
    return Math.floor(Math.random() * this.gameTitles.length);
  }

  removeGame(title) {
    if (!this.games.has(title)) return false;

    const index = this.games.get(title);
    const lastElement = this.gameTitles.length - 1;

    this.gameTitles[index] = lastElement;
    this.games.set(lastElement, index);

    this.gameTitles.pop();
    this.map.delete(title);
    return true;
  }

  getGameByGenre(genre) {
    return this.genreMap.get(genre);
  }

  updateGame(title, newGenre, newYear) {
    if (!this.games.has(title)) return false;
  }
}

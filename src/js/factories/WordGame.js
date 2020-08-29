function WordGame() {
  this.totalGuesses = 10;
  this.wins = 0;
  this.losses = 0;
  this.userGuesses = [];
  this.blanks = [];
};

WordGame.prototype.getRandomWord = function (arr) {
  let n = arr.length, i, t;
  while (n) {
    i = Math.floor(Math.random() * n--);
    t = arr[n];
    arr[n] = arr[i];
    arr[i] = t;
  }
  return arr[Math.floor(Math.random() * arr.length)].toLowerCase();
};

WordGame.prototype.checkGuess = function (key, arr1, arr2, el) {
  for (let i = 0; i < arr1.length; i++) {
    if (key === arr1[i]) {
      arr2[i] = key;
      el.innerHTML = arr2.join(' ');
    }
  }
  return true
};

export default WordGame;
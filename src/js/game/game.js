import { words } from '../words/words'
import WordGame from '../factories/WordGame';
import UI from '../factories/UI';

export const game = () => document.addEventListener('DOMContentLoaded', function (e) {
const newGame = new WordGame();

const uiElements = new UI();

const {
  wordBlanks,
  userGuesses,
  totalGuesses
} = uiElements;

const collectGuesses = (key) => {
  if (!newGame.userGuesses.includes(key) && !newGame.blanks.includes(key)) {
        newGame.userGuesses.push(key);
  };
  return newGame.userGuesses.join(' ');
};

  const resetGame = () => {
    return game()
 }

  const singleWord = Array.from(newGame.getRandomWord(words));

  singleWord.forEach(function (letter) {
    return newGame.blanks.push(` _ `);
  });

  // Blanks displayed in html
  wordBlanks.innerHTML = newGame.blanks.join(' ');
  document.addEventListener('keyup', function (e) {
    totalGuesses.textContent = newGame.totalGuesses;
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      newGame.totalGuesses--
      console.log(newGame.totalGuesses)
      if (newGame.totalGuesses === 0) {
        console.log(newGame.totalGuesses)
        resetGame()
      }
      userGuesses.innerHTML = collectGuesses(e.key)
      
      newGame.checkGuess(e.key, singleWord, newGame.blanks, wordBlanks)
      newGame.checkGameStatus();
    }
  });
});


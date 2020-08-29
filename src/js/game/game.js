import { words } from '../words/words'
import WordGame from '../factories/WordGame';
import UI from '../factories/UI';

const newGame = new WordGame();

const uiElements = new UI();

const {
  wordBlanks,
  userGuesses,
  totalGuesses
} = uiElements;

const collectGuesses = (key) => {
  if (newGame.userGuesses.includes(key)) {
    return `Already guessed ${key}`
  }
  
  newGame.userGuesses.push(key)

  return newGame.userGuesses.join(' ');
 
};

export const game = document.addEventListener('DOMContentLoaded', function (e) {

  console.log('[Load Success]', e.type)

  totalGuesses.textContent = 10;

  const singleWord = Array.from(newGame.getRandomWord(words));

  singleWord.forEach(function (letter) {
    return newGame.blanks.push(`<span class="wordblank"> _ </span>`);
  });

  // Blanks displayed in html
  wordBlanks.innerHTML = newGame.blanks.join(' ');
  document.addEventListener('keyup', function (e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      userGuesses.innerHTML = collectGuesses(e.key)
      console.log(wordBlanks)
      newGame.checkGuess(e.key, singleWord, newGame.blanks, wordBlanks) 
    }
  });
});


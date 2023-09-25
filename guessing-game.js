function guessingGame() {
    // Generate a random number between 0 and 99
    const secretNumber = Math.floor(Math.random() * 100);
    let isGameOver = false;
    let numberOfGuesses = 0;
  
    return function(guess) {
      if (isGameOver) {
        return "The game is over, you already won!";
      }
  
      numberOfGuesses++;
  
      if (guess === secretNumber) {
        isGameOver = true;
        return `You win! You found ${secretNumber} in ${numberOfGuesses} guess${numberOfGuesses === 1 ? '' : 'es'}.`;
      } else if (guess < secretNumber) {
        return `${guess} is too low!`;
      } else {
        return `${guess} is too high!`;
      }
    };
  }
  

module.exports = { guessingGame };

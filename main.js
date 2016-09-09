var prompt = require("prompt");
var Word = require("./word.js");

prompt.start();

var game = {
    wordBank: ["work", "experience", "excellent", "test", "private"],
    wordsWon: 0,
    guessesRemaining: 10,
    currentWrd: null,
    startGame: function(wrd) {
      //make sure the user has 10 guesses
      this.resetGuessesRemaining();

      //get a random word from the array
      this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);

      this.currentWrd.getLets();

      this.keepPrompting();
    },

    resetGuessesRemaining: function() {
      this.guessRemaining = 10;
    },

    keepPrompting: function() {
      var self = this;
      prompt.get(["guessLetter"], function(err, result) {
          console.log("The Letter or space you guessed is : " + result.guessLetter);

          //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
          var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);


          if (findHowManyOfUserGuess == 0) {
            console.log("You Guessed Wrong!");
            self.guessesRemaining--;
          } else {
            console.log("You guessed right!");

            if (self.currentWrd.didWeFindTheWord()) {
              console.log("You Won!!!");
              return;
            }
          }
          console.log("Guesses remaining: ", self.guessesRemaining);
          console.log(self.currentWrd.wordRender());
          console.log('here are the letters you guessed already: ');

          if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)) {
            self.keepPrompting();
          } else if (self.guessesRemaining == 0) {
              console.log("Game Over Bro - ", self.currentWrd.word);
            } else {
              console.log(self.currentWrd.wordRender());
            }

      });
    
    }
  };
game.startGame();
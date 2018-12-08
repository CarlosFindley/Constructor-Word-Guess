// index.js: The file containing the logic for the course of the game, which depends on Word.js and:
var inquirer = require("inquirer");
var Word = require("./Word");
var wordsToGuess = require("./guess");

// CONST wordsToGuess = [
//     "Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento",
//     "Denver", "Hartford", "Dover", "Tallahassee", "Atlanta",
//     "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines",
//     "Topeka", "eris", "makemake", "Frankfort", "Baton Rouge",
//     "Augusta", "Annapolis", "Boston"
//   ];

  // The Game constructor is responsible for keeping score and controlling the flow of the overall game

function Game() {
    // Save a reference for `this` in `self` as `this` will change inside of inquirer
    var self = this;
  
    // Sets the guesses to 10 and gets the next word
    this.play = function() {
      this.guessesLeft = 10;
      this.nextWord();
    };
  
    // Creates a new Word object using a random word from the array, asks the user for their guess
    this.nextWord = function() {
      var randWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
      this.currentWord = new Word(randWord);
      console.log("\n" + this.currentWord + "\n");
      this.makeGuess();
    };
  
    // Uses inquirer to prompt the user for their guess
    this.makeGuess = function() {
      this.askForLetter().then(function() {
        // If the user has no guesses remaining after this guess, show them the word, ask if they want to play again
        if (self.guessesLeft < 1) {
          console.log(
            "No guesses left! Word was: \"" + self.currentWord.getSolution() + "\"\n"
          );
          self.askToPlayAgain();
  
          // If the user guessed all letters of the current word correctly, reset guessesLeft to 10 and get the next word
        }
        else if (self.currentWord.guessedCorrectly()) {
          console.log("You got it right! Next word!");
          self.guessesLeft = 10;
          self.nextWord();
  
          // Otherwise prompt the user to guess the next letter
        }
        else {
          self.makeGuess();
        }
      });
    };
  
    // Asks the user if they want to play again after running out of guessesLeft
    this.askToPlayAgain = function() {
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "choice",
            message: "Play Again?"
          }
        ])
        .then(function(val) {
          // If the user says yes to another game, play again, otherwise quit the game
          if (val.choice) {
            self.play();
          }
          else {
            self.quit();
          }
        });
    };
  
    // Prompts the user for a letter
    this.askForLetter = function() {
      return inquirer
        .prompt([
          {
            type: "input",
            name: "choice",
            message: "Guess a letter!",
            validate: function(val) {
              // The users guess must be a number or letter
              return /[a-z1-9]/gi.test(val);
            }
          }
        ])
        .then(function(val) {
          // If the user's guess is in the current word, log that they chose correctly
          var didGuessCorrectly = self.currentWord.guessLetter(val.choice);
          if (didGuessCorrectly) {
            console.log("\nCORRECT!!!\n");
  
            // Otherwise decrement `guessesLeft`, and let the user know how many guesses they have left
          }
          else {
            self.guessesLeft--;
            console.log("\nINCORRECT!!!\n");
            console.log(self.guessesLeft + " guesses remaining!!!\n");
          }
        });
    };
  
    // Logs goodbye and exits the node app
    this.quit = function() {
      console.log("\nGoodbye!");
      process.exit(0);
    };
  }
  
  module.exports = Game;

  // Initialize a new Game object
var game = new Game();

// Start playing
game.play();
  


// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses
// Letter.js should not require any other files.
// Word.js should only require Letter.js
// HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js
// HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)
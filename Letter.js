// This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.

// Creating the constructor
function Letter(letter) {
    // if a character is not a-z or 1-9, make it visible
    this.visible = !/[a-z1-9]/i.test(letter);
    // A string value to store the underlying character for the letter
    this.letter = letter;
}

// prototypes allow us to add to the Letter constructor
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
//    because we call this function toString, when we call `this.letters.join` in
//    Word.js, JavaScript automatically uses the value we return here
Letter.prototype.toString = function() {
    // makes the letters visible
    if (this.visible === true) {
      return this.letter;
    } // returns the underscore for letters not yet guessed
    return "_";
  };
  
// A boolean value that stores whether that letter has been guessed yet
Letter.prototype.getSolution = function() {
    return this.letter;
  };
  
  // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
  Letter.prototype.guess = function(letterGuess) {
    if (letterGuess.toUpperCase() === this.letter.toUpperCase()) {
      this.visible = true;
      return true;
    }
  
    // Otherwise return false
    return false;
  };
  
  module.exports = Letter;



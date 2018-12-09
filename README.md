<h1>#Object Constructor-Word-Guess</h1>
<h2>Project</h2>
<p>This is a word guess command-line game using constructor functions.</p>

<h3>Tools used:</h3>
<ul>
  <li>Inquirer</li>
</ul>  

<h3>Constructor requirements</h3>
<p><b>Letter.js:</b> Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:</p>
<ul>
  <li>A string value to store the underlying character for the letter</li>
  <li>A boolean value that stores whether that letter has been guessed yet</li>
  <li>A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed</li>
  <li>A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean   value to true if it was guessed correctly</li>
</ul>

<br>

<p><b>Word.js:</b> Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:</p>
<ul>
  <li>An array of new Letter objects representing the letters of the underlying word</li>
  <li>A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.</li>
  <li>A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)</li>

<br>

<p><b>Word.js:</b> Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:</p>
<ul>
  <li>An array of new Letter objects representing the letters of the underlying word</li>

<p><b>index.js:</b>The file containing the logic for the course of the game, which depends on Word.js and:</p>
<lu>
  <li>Randomly selects a word and uses the Word constructor to store it</li>
  <li>Prompts the user for each guess and keeps track of the user's remaining guesses</li>
</lu>

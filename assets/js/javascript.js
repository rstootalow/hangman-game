// GLOBAL VARIABLES

// WORD BANK OF WORDS TO RANOMLY CHOOSE FROM
gameWords = ["tool", "metallica", "megadeth", "nirvana", "biggie"];

var selectedWord; // holds the selected word from the word bank array
var lettersInWord = [];
var correctGuesses; // variable to store correct LETTER guesses from the player. START with "_" then poulate with correct key presses
var wrongLetters = []; // array to hold the incorrect LETTER guesses from the player
var wins = 0; // counter for number of WORDS guessed correctly
var losses = 0; // counter for number of WORDS guessed incorrectly
const numOfGuessesLeft = 10; // number of guesses remaining on current word
var underscores = []; // variable that keeps count of the number of words in selected word and puts an underscore there. 
var userGuess; // the key press the user makes when selecting the words. 






/* FUNCTIONS TO BE USED IN THE GAME */

// alert("Press any key to start the game!");

// START OF THE GAME
    
        function gameStart() {
            // choose a random word from the word bank for the player to guess
            selectedWord = gameWords[Math.floor(Math.random() * gameWords.length)].toString();
            //TEST
            console.log(selectedWord); // TEST
            // get list of letters in selectedWord and add those letters to the lettersInWord array
            lettersInWord = selectedWord.split("");
            console.log(lettersInWord); // TEST
            // populate selected word with "_" based on length of selected word
            for(var i = 0; i < selectedWord.length; i++) {
                    underscores[i] = " _ "; //adds underscore to the bandToGuess field to indicate how many letters are in the word. 
                    
            }


            //key presses to start populating letters
           
                // if the letter is not one of the letters in selected word

                /* Javascript logic added to HTML elements */
            document.getElementById("bandToGuess").innerHTML = "Band To Guess:  " + "<br>" + underscores.join(' ');
          

            }

        
        /* FUNCTION TO CHECK IF ALL LETTERS HAVE BEEN GUESSED IN SELECTED WORD */

        /* Game End and Reset Code Goes Here */


            


// RUN FUNCTIONS
gameStart();












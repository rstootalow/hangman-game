// GLOBAL VARIABLES

// WORD BANK OF WORDS TO RANOMLY CHOOSE FROM
gameWords = ["tool", "metallica", "megadeth", "nirvana", "biggie"];

var selectedWord; // holds the selected word from the word bank array
var lettersInWord = [];
// var correctGuesses = []; // variable to store correct LETTER guesses from the player. START with "_" then poulate with correct key presses
var wrongLetters = []; // array to hold the incorrect LETTER guesses from the player
var wins = 0; // counter for number of WORDS guessed correctly
var losses = 0; // counter for number of WORDS guessed incorrectly
var numOfGuessesLeft = 10; // number of guesses remaining on current word
var underscoresAndGuesses  = []; // variable that keeps count of the number of words in selected word and puts an underscore there. 
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
                    underscoresAndGuesses[i] = " _ "; //adds underscore to the bandToGuess field to indicate how many letters are in the word. 
                    
            }


            //key presses to start populating letters
            document.onkeyup = function(event) {
                userGuess = event.key; // key press value is added to userGuess variable
                // console.log(userGuess); // TEST
                // if single userGuess key press = one of the letters of the selected word, add that letter to correct guess and in the correct position
                for (var i = 0; i < lettersInWord.length; i++) {
                        if(lettersInWord[i] === userGuess) { // if the letter in the current iteration === the userGuess (key press) 
                            underscoresAndGuesses[i] = userGuess;
                            document.getElementById("band-to-guess").innerHTML = underscoresAndGuesses.join(" ");
                        }
                            
                    }
                }
                // if the letter is not one of the letters in selected word

                /* Javascript logic added to HTML elements */
            document.getElementById("band-to-guess").innerHTML = "Band To Guess:  " + "<br>" + underscoresAndGuesses.join(' ');
            document.getElementById("incorrect-guesses").innerHTML = "Incorrect Guesses " + "<br>" + wrongLetters.join(' ');
            // document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + numOfGuessesLeft; 

            }

        
        /* FUNCTION TO CHECK IF ALL LETTERS HAVE BEEN GUESSED IN SELECTED WORD */

        /* Game End and Reset Code Goes Here */


            


// RUN FUNCTIONS
gameStart();












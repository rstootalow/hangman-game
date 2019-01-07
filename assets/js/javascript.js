

// WORD BANK OF WORDS TO RANOMLY CHOOSE FROM
gameWords = ["tool", "metallica", "megadeth", "nirvana", "biggie", "snoop doggy dog", "live"];

var selectedWord; // holds the selected word from the word bank array
var lettersInWord = [];
var guessesToCorrect = 0; // number of correct guesses NEEDED to complete the selected word.
var wrongGuess = []; // array to hold the incorrect LETTER guesses from the player
var correctGuess = 0; // store correct guesses to compare to letter in words when determining wins or losses. 
var wins = 0; // counter for number of WORDS guessed correctly
var losses = 0; // counter for number of WORDS guessed incorrectly
var numOfGuessesLeft = 10; // number of guesses remaining on current word
var underscoresAndGuesses  = []; // variable that keeps count of the number of words in selected word with "_" and correct guesses
var userGuess; // the key press the user makes when selecting the words. 


// choose a random word from the word bank for the player to guess
selectedWord = gameWords[Math.floor(Math.random() * gameWords.length)].toString();
// get list of letters in selectedWord and add those letters to the lettersInWord array
lettersInWord = selectedWord.split("");
console.log(lettersInWord); // TEST

// START OF THE GAME
function gameStart() {
    // populate selected word with "_" based on length of selected word
    for(var i = 0; i < selectedWord.length; i++) {
            underscoresAndGuesses[i] = " _ "; //adds underscore to the bandToGuess field to indicate how many letters are in the word.
    
    }
    guessesToCorrect = lettersInWord.length;
    /* DEFAULT HTML ELEMENTS TO POPULATE AT START OF GAME */
    document.getElementById("bandToGuess").innerHTML = "Band To Guess:  " + "<br>" + underscoresAndGuesses.join(' ');
    document.getElementById("incorrect-guesses").innerHTML = "Incorrect Guesses: " + "<br>" + wrongGuess.join(' ');
    document.getElementById("guesses-left").innerHTML = "Guesses Left: " + numOfGuessesLeft;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
}
function checkLetter() {
     //key presses to start choose letters
     document.onkeypress = function(event) {
        userGuess = event.key // key press value is added to userGuess variable
        var letterFound = false;
        for (var i = 0; i < lettersInWord.length; i++) {
                    if(lettersInWord[i] === userGuess) {
                        underscoresAndGuesses[i] = userGuess;
                        correctGuess++;
                        console.log(correctGuess); // TEST
                        document.getElementById("bandToGuess").innerHTML = "Band To Guess: " + "<br>" + underscoresAndGuesses.join("");
                        letterFound = true;
                        numOfGuessesLeft--;
                        document.getElementById("guesses-left").innerHTML = "Guesses Left: " + numOfGuessesLeft;
                    } 
                }
             if (letterFound) return;
                
                // if the letter is not one of the letters in selected word
                if (wrongGuess.indexOf(userGuess < 0)) { // if value is -1 it is not there, meaning we can push that letter to the incorrectGuesses
                        wrongGuess.push(userGuess);
                        console.log(wrongGuess); // TEST
                        document.getElementById("incorrect-guesses").innerHTML = "Incorrect Guesses: " + "<br>" + wrongGuess.join(" ");
                        numOfGuessesLeft--;
                        document.getElementById("guesses-left").innerHTML = "Guesses Left: " + numOfGuessesLeft;
                    }
                }
}

/* FUNCTION TO CHECK IF USER GUESSED CORRECT WORD */
function checkIfWon() {
    // check if all letters in selected word have been guessed
    if (correctGuess === guessesToCorrect) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
         alert("Congrats! You've won the game!");
    // code a reset function to restart the game after win
} else if (numOfGuessesLeft === 0) {
    losses++;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    alert("You lost! Please try again!");
}
        
}


    
        /* Game End and Reset Code Goes Here */

        
            


// CALL FUNCTIONS
gameStart();
checkLetter();
checkIfWon();












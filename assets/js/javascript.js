

// WORD BANK OF WORDS TO RANOMLY CHOOSE FROM
gameWords = ["tool", "metallica", "megadeth", "nirvana", "biggie", "snoop", "live"];

var selectedWord; // holds the selected word from the word bank array
var lettersInWord = []; 
var wrongGuess = []; // array to hold the incorrect LETTER guesses from the player
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

document.getElementById("bandToGuess").innerHTML = "Band To Guess:  " + "<br>" + underscoresAndGuesses.join(' ');
document.getElementById("incorrect-guesses").innerHTML = "Incorrect Guesses: " + "<br>" + wrongGuess.join(' ');
document.getElementById("guesses-left").innerHTML = "Guesses Left: " + numOfGuessesLeft;
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;

// START OF THE GAME
function gameStart() {
    // populate selected word with "_" based on length of selected word
    for(var i = 0; i < selectedWord.length; i++) {
            underscoresAndGuesses[i] = " _ "; //adds underscore to the bandToGuess field to indicate how many letters are in the word.
    
    }
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
                        document.getElementById("bandToGuess").innerHTML = "Band To Guess: " + "<br>" + underscoresAndGuesses.join("");
                        letterFound = true;
                    } 
                }
             if (letterFound) return;
                
                // if the letter is not one of the letters in selected word
                if (wrongGuess.indexOf(userGuess < 0)) {
                        wrongGuess.push(userGuess);
                        console.log(wrongGuess); // TEST
                        document.getElementById("incorrect-guesses").innerHTML = "Incorrect Guesses: " + "<br>" + wrongGuess.join(" ");
                    }

                }
}

        /* Game End and Reset Code Goes Here */


            


// RUN FUNCTIONS
gameStart();
checkLetter();












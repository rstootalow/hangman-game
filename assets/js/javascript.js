

// WORD BANK OF WORDS TO RANOMLY CHOOSE FROM
    gameWords = ["gob", "michael", "tobias", "zuckercorn", "buster", "george michael", "george oscar", "lucille", "her?"];
    var wins = 0; // counter for number of WORDS guessed correctly
    var losses = 0; // counter for number of WORDS guessed incorrectly

    var selectedWord; // holds the selected word from the word bank array
    var lettersInWord;
    var wrongGuess; // array to hold the incorrect LETTER guesses from the player
    var correctGuess;// store correct guesses to compare to letter in words when determining wins or losses. 
    var numOfGuessesLeft;// number of guesses remaining on current word
    var underscoresAndGuesses; // variable that keeps count of the number of words in selected word with "_" and correct guesses
    var userGuess; // the key press the user makes when selecting the words.
    var correctWord; // variable to store correctly guessed word and match it to class to hide images on page. 

    /* DEFAULT HTML ELEMENTS TO POPULATE AT START OF GAME */


// guessesToCorrect = lettersInWord.length;

// START OF THE GAME
function gameStart() {

    lettersInWord = [];
    wrongGuess = [];
    correctGuess = 0;
    numOfGuessesLeft = 15;
    underscoresAndGuesses = [];
    //choose a random word from the word bank for the player to guess
    selectedWord = gameWords[Math.floor(Math.random() * gameWords.length)].toString();
    // get list of letters in selectedWord and add those letters to the lettersInWord array
    lettersInWord = selectedWord.split("");
    console.log(lettersInWord); // TEST
    // populate selected word with "_" based on length of selected word
    for(var i = 0; i < lettersInWord.length; i++) {
            underscoresAndGuesses[i] = " _ "; //adds underscore to the bandToGuess field to indicate how many letters are in the word.
    }

    document.getElementById("actorToGuess").innerHTML = "Character To Guess:  " + "<br>" + underscoresAndGuesses.join(' ');
    document.getElementById("incorrect-guesses").innerHTML = "Incorrect Guesses: " + "<br>" + wrongGuess.join(' ');
    document.getElementById("guesses-left").innerHTML = "Guesses Left: " + numOfGuessesLeft;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;

    document.onkeypress = function(event) {
        userGuess = event.key // key press value is added to userGuess variable
        if (wrongGuess.includes(userGuess)) {
            return;
        }

        var letterFound = false;
        for (var i = 0; i < lettersInWord.length; i++) {
                    if (lettersInWord[i] === userGuess) {
                        underscoresAndGuesses[i] = userGuess;
                        correctGuess++;
                        document.getElementById("actorToGuess").innerHTML = "Character To Guess: " + "<br>" + underscoresAndGuesses.join("");
                        letterFound = true;
                        numOfGuessesLeft--;
                        document.getElementById("guesses-left").innerHTML = "Guesses Left: " + numOfGuessesLeft;
                    }
                    winLoss();
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
                    winLoss();
                }

                // toggleImage();

}

function toggleImage() {
    // if the selected word is correctly guessed
    if (correctGuess === lettersInWord.length) {
        lettersInWord = correctWord;
        console.log(correctWord); //TEST
    }
}
        
function winLoss() {
    // check if all letters in selected word have been guessed
    if (correctGuess === lettersInWord.length) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        alert("Congrats! You've won the game!");
        toggleImage();
        gameReset();
    } else if (numOfGuessesLeft === 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        alert("You lost! Please try again!");
        gameReset();
    }
}

/* FUNCTION TO SHOW IMAGE OF CORRECT GUESS */
function toggleImage() {
    // if the selected word is correctly guessed
    if (correctGuess === lettersInWord.length) {
        lettersInWord = correctWord;
        console.log(correctWord); //TEST
    }
    //hide the other images
    //and only show the correct image on the screen. 
    
}

/* RESET FUNCTION AFTER WIN / LOSS */

function gameReset() {
    gameStart();
}
// CALL FUNCTIONS
gameStart();